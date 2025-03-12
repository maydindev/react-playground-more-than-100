import savedData from '../savedData'
import { useState, useEffect, useRef } from 'react'

export default function ToDoList() {
  const [listData, setListData] = useState(savedData)
  const [newItemInput, setNewItemInput] = useState('')
  const [autoCompleteRequested, setAutoCompleteRequested] = useState(false)
  const [inputInFocus, setInputInFocus] = useState(false)
  const listContainerRef = useRef(null)

  function handleCheckBoxChange(event) {
    setListData((prevList) => {
      return prevList.map((item) => {
        return item.id === event.target.name
          ? { ...item, complete: !item.complete }
          : item
      })
    })
  }

  function handleNewItemInputChange(event) {
    setNewItemInput(event.target.value)
  }

  /**** Sizi İlgilendiren Bölüm **************************************************************************/

  function handleEnter(event) {
    //console.log(newItemInput)
    //console.log(event.target.value)
    if (newItemInput.trim()) {
      if (event.key === 'Enter') {
        setListData((prevList) => {
          const newListItem = {
            text: event.target.value,
            complete: false,
            id: crypto.randomUUID(),
          }
          return [...prevList, newListItem]
        })
        setNewItemInput("")
        //console.log(newItemInput)
        scrollToBottom()
      }     
    }
  }

  function autoComplete() {
    setAutoCompleteRequested(true)

  }
  function toggleInputFocus() {
    setInputInFocus((pre) => !pre)
  }
  useEffect(() => {
    if (autoCompleteRequested) {
      let timeOut = setTimeout(() => {
        setAutoCompleteRequested(false)
        setListData((prevData) => {
          return prevData.map((item) => {
            return !item.complete ? { ...item, complete: true } : item
          })
        })
      }, 2000)
    }
  }, [autoCompleteRequested])

  const scrollToBottom = () => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = listContainerRef.current.scrollHeight
    }
  }

  /* Challenge
  
    1. ClassName'i "new-item-input" olan text input focus'ta olduğunda, opacity 
	   className'i "add-item-icon" olan görselin className'ine "faded" class'ı eklenerek 0.2 olarak ayarlanmalıdır. Input focus olmadığında ise bu class image'den kaldırılmalıdır.
       
    2. Kullanıcı yapılacaklar listesine yeni bir öğe eklediğinde, text input elementi 
       metinden temizlenir ve tekrar boş hale gelir.
       
    3. Kullanıcı "Otomatik Tamamla" butonuna tıkladığında, yapılacaklar listesi öğelerinin üzeri çizilirken onay kutularının tümü aynı anda işaretlenmelidir. 
       
4. Bu görevleri tamamlamak için, bu yorumların altındaki kodda birkaç küçük değişiklik yapmanız gerekecektir. Ayrıca bu dosyaya birkaç küçük ekleme yapmanız gerekecektir. Bu eklemeleri nereye yapılması gerektiğini düşünüyorsanız oraya yapabilirsiniz. Kendinizi çok fazla kod değiştirirken veya eklerken bulursanız, işleri aşırı derecede karmaşık hale getiriyorsunuz demektir 
       
    Not: 24. satır ("Sizi İlgilendiren Bölüm" olarak işaretlenmiştir) ile bu yorumlar arasındaki kodu okumalısınız. Bu kodun bazı yönleri bu görevleri tamamlamakla ilgilidir. Ancak, bu kod üzerinde herhangi bir değişiklik yapmanıza gerek yoktur. Sadece anlamanız gerekiyor
*/

  const currentList = listData.map((item) => {
    return (
      <div className='to-do-list-item-container' key={item.id}>
        <label className='checkbox-label'>
          <input
            type='checkbox'
            name={item.id}
            checked={item.complete}
            onChange={handleCheckBoxChange}
          />
          <span className='checkmark'></span>
          <p
            className={`to-do-list-item-text ${item.complete && 'crossed-out'}`}
          >
            {item.text}
          </p>
        </label>
        <div className='all-progress-bars-container'>
          {!item.complete && autoCompleteRequested && (
            <div className='progress-bar-container'>
              <div className='progress-bar-content'></div>
            </div>
          )}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='to-do-list-container' ref={listContainerRef}>
        {currentList}
        <label className='new-item-label'>
          <img src='./images/add-item.svg' className={`add-item-icon ${inputInFocus ? 'faded' : ''}`} /*className={`add-item-icon`}*/ />
          <input
            className='new-item-input'
            type='text'
            value={newItemInput}
            onKeyDown={handleEnter}
            onChange={handleNewItemInputChange}
            onFocus={toggleInputFocus}
            onBlur={toggleInputFocus}
          />
        </label>
      </div>
      <div className='do-it-button-container'>
        <button onClick={autoComplete}>Otomatik Tamamlama</button>
      </div>
    </div>
  )
}
