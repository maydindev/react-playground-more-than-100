import { useState } from 'react'

// Fatura adresini güncellemeyi mümkün kılın (diğer özellikleri silmeden)
export default function CardDetails() {
  const [card, setCard] = useState({
    number: '4242424242424242',
    expiration: '04/26',
    cvc: '424',
    country: 'Türkiye',
    postalCode: '42424',
  })

  const [billingAddress,setBillingAddress] = useState({
    country: '',
    address: ''
  })

  return (
    <div className='py-4 max-w-sm mx-auto'>
      <fieldset>
        <legend className='block text-sm font-medium leading-6 text-gray-900'>
          Kart Detayları
        </legend>
        <div className='mt-2 -space-y-px rounded-md bg-white shadow-sm'>
          <div
            type='text'
            className='px-2 relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
          >
            {card.number}
          </div>
          <div className='flex -space-x-px'>
            <div className='w-1/2 min-w-0 flex-1'>
              <div
                type='text'
                className='px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
              >
                {card.expiration}
              </div>
            </div>
            <div className='min-w-0 flex-1'>
              <div
                type='text'
                className='px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
              >
                {card.cvc}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className='mt-6 bg-white'>
        <legend className='block text-sm font-medium leading-6 text-gray-900'>
          Fatura adresi
        </legend>
        <div className='mt-2 -space-y-px rounded-md shadow-sm'>
          <div>
            <label htmlFor='country' className='sr-only'>
              Ülke
            </label>
            <select
              id='country'
              name='country'
              className='relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1'
              defaultValue={card.country}
              onChange={(e) => setBillingAddress({...billingAddress, country: e.target.value})}
            >
              <option>İtalya</option>
              <option>Türkiye</option>
              <option>Meksika</option>
            </select>
          </div>
          <div>
            <label htmlFor='postal-code' className='sr-only'>
              ZIP / Posta kodu
            </label>
            <input
              type='text'
              name='postal-code'
              id='postal-code'
              className='px-2 relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder=' ZIP / Posta kodu'
              defaultValue={card.postalCode}
              onChange={(e) => setBillingAddress({...billingAddress, address: e.target.value})}
            />
            <br />
            <p>country: {billingAddress.country}</p>
            <p>address: {billingAddress.address}</p>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
