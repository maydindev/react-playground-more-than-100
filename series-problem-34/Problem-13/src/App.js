import { useState } from 'react'

// Formun yanında adı, soyadı ve saat dilimini görüntüleyin
// Bonus: Herhangi bir değer eksikse kaydet butonunu devre dışı bırakalım
export default function PersonalInfo() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [timeZone, setTimeZone] = useState('')

  const isDisabled = name && lastName && timeZone && timeZone !== 'Seçiniz'

  return (
    <div className='bg-gray-800 h-screen divide-y divide-white/5'>
      <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-white'>
            {name} {lastName}
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>{timeZone}</p>
        </div>

        <form className='md:col-span-2'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-white'
              >
                Adınız
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  onChange={(event) => {
                    //console.log(event.target.value)
                    setName(event.target.value)
                  }}
                  value={name}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-white'
              >
                Soyadınız
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  onChange={(event) => {
                    setLastName(event.target.value)
                  }}
                  value={lastName}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='timezone'
                className='block text-sm font-medium leading-6 text-white'
              >
                Zaman Dilimi
              </label>
              <div className='mt-2'>
                <select
                  id='timezone'
                  name='timezone'
                  onChange={(event) => {
                    setTimeZone(event.target.value)
                  }}
                  value={timeZone}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option>Seçiniz</option>
                  <option>Pasifik Standart Saati</option>
                  <option>Doğu Standart Saati</option>
                  <option>Greenwich Ortalama Saati</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <button
              type='submit'
              className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              disabled={!isDisabled}
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
