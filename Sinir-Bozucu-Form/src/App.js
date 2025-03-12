import './styles.css'
import { useState, useEffect } from 'react'

export default function App() {
  function handleChange(event) {
    const { name, type, value, checked } = event.target

    function hijackResults() {
      let string = ''

      if (name === 'firstName') {
        string = 'Namık'
      } else if (name === 'lastName') {
        string = 'Korona'
      } else {
        string = 'NamıkKorona@gmail.com'
      }

      return string.slice(0, value.length)
    }

    function switcharoo(event) {
      if (value === 'no' && formData.privacyResponse === 'yes') {
        return 'absolutely'
      } else if (value === 'no' && formData.privacyResponse === 'absolutely') {
        return 'yes'
      } else {
        return value
      }
    }

    let dataToRecord

    if (name === 'firstName' || name === 'lastName' || name === 'email') {
      dataToRecord = hijackResults()
    } else if (type === 'radio') {
      dataToRecord = switcharoo(event)
    } else {
      dataToRecord = type === 'checkbox' ? checked : value
    }

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: dataToRecord,
      }
    })
  }

  function fakeSubmit(e) {
    e.preventDefault()
    setFormData((prev) => ({
      ...formData,
      wantsToSubmit: !prev.wantsToSubmit,
    }))
  }

  useEffect(() => {
    if (formData.rating !== '10') {
      setTimeout(() => {
        setFormData({ ...formData, rating: '10' })
      }, 2000)
    }

    if (!formData.marketingResponse) {
      setTimeout(() => {
        setFormData({ ...formData, rating: '10', marketingResponse: true })
      }, 2000)
    }
  })

  /* 
	🚨 Not: Yukarıdaki kodların hiçbiri challenge ile doğrudan ilgili değildir. Hiçbiri değiştirilmemelidir.

  /* Challenge

	Bu form yeterince sinir bozucu değil. Sizin göreviniz aşağıdakileri yaparak onu daha sinir bozucu hale getirmek:
	
		1. Formun her elementi kontrol edilen bir element olmalıdır. Her bir element aşağıdaki 107. satırdaki formData state nesnesindeki ilgili özellik tarafından kontrol edilmelidir. Elemanlar ve karşılık gelen özellikleri aşağıdaki gibidir:


				+------+----------------+--------------+-------------------+-------------------+
				| Line | Element Türü   | Value        | Name              | formData Özelliği |
				+------+----------------+--------------+-------------------+-------------------+
				| 121  | text input     | n/a          | firstName         | firstName         |
				+------+----------------+--------------+-------------------+-------------------+
				| 128  | text input     | n/a          | lastName          | lastName          |
				+------+----------------+--------------+-------------------+-------------------+
				| 135  | email input    | n/a          | email             | email             |
				+------+----------------+--------------+-------------------+-------------------+
				| 148  | radio input    | "yes"        | privacyResponse   | privacyResponse   |
				+------+----------------+--------------+-------------------+-------------------+
				| 159  | radio input    | "no"         | privacyResponse   | privacyResponse   |
				+------+----------------+--------------+-------------------+-------------------+
				| 171  | radio input    | "absolutely" | privacyResponse   | privacyResponse   |
				+------+----------------+--------------+-------------------+-------------------+
				| 189  | select         | "n/a         | rating            | rating            |
				+------+----------------+--------------+-------------------+-------------------+
				| 203  | checkbox input | "n/a"        | marketingResponse | marketingResponse |
				+------+----------------+--------------+-------------------+-------------------+
				
		2. Gerçek bilgilerinizi girmeye çalışarak ve soruları kullanıcıların normalde yapacağı şekilde yanıtlayarak kodunuzu test edin. Önceki görevi doğru bir şekilde tamamladıysanız, 71. satırın üzerindeki kodlar sayesinde tüm yanıtlarınız mizahi bir şekilde engellenmelidir. 
	
	İpucu: Formla etkileşim halindeyken, formla ne *olması gerektiğini* (ve form kontrol edilseydi ne olacağını) anlamak istiyorsanız: console.log(formData)
*/

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    privacyResponse: 'yes',
    rating: '10',
    marketingResponse: true,
    wantsToSubmit: false,
  })

  return (
    <form onSubmit={fakeSubmit}>
      <h1>Dünyanın En Sinir Bozucu Formu</h1>

      <input
        type='text'
        placeholder='Adı'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />

      <input
        type='text'
        placeholder='Soyadı'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />

      <input
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />

      <fieldset>
        <legend>
          Gizlilikle ilgili tüm haklarınızdan feragat etmek ister misiniz?
        </legend>
        <div className='privacy-container'>
          <label>
            <input
              type='radio'
              id='yes'
              name='privacyResponse'
              value='yes'
              onChange={handleChange}
              checked={formData.privacyResponse === 'yes'}
            />
            Evet
          </label>

          <label>
            <input
              type='radio'
              id='no'
              name='privacyResponse'
              value='no'
              //defaultChecked
              onChange={handleChange}
              checked={formData.privacyResponse === 'no'}
            />
            Hayır
          </label>

          <label>
            <input
              type='radio'
              id='absolutely'
              name='privacyResponse'
              value='absolutely'
              onChange={handleChange}
              checked={formData.privacyResponse === 'absolutely'}
            />
            Kesinlikle
          </label>
        </div>
      </fieldset>

      <fieldset className='rating-container'>
        <legend>
          Bu formu 1-10 arasında, 1 en kötü ve 10 en iyi olmak üzere nasıl
          değerlendirirsiniz?
        </legend>

        <select onChange={handleChange} name='rating' value={formData.rating} defaultValue="10">
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
      </fieldset>

      <label className='marketing-label'>
        <input
          type='checkbox'
          name='marketingResponse'
          checked={formData.marketingResponse}
          onChange={handleChange}
        />

        <div className='checkmark'></div>
        <span>Günde 20 pazarlama maili almak istiyorum. </span>
      </label>

      <button
        className={formData.wantsToSubmit ? 'move' : ''}
        onFocus={fakeSubmit}
        onMouseEnter={fakeSubmit}
      >
        Gönder
      </button>
    </form>
  )
}
