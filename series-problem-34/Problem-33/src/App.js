import { createContext, useContext,useState } from 'react'

function useUserData() {
  return {
    username: 'namık86',
    firstName: 'Namık',
    lastName: 'Korona',
    emailAddress: 'nak86@gmail.com',
  }
}

const UserContext = createContext(false)

export default function App() {
  const [userData,setUserData] = useState(useUserData())
  return (
    <UserContext.Provider value={userData}>
  <ProfilePage />
  </UserContext.Provider>
  )
}

function ProfilePage() {
  return (
    <form className='p-8'>
      <div className='space-y-12'>
        <ProfileInfo />
        <PersonalInfo />
      </div>
    </form>
  )
}

function ProfileInfo() {
  const data = useContext(UserContext)
  return (
    <div className='border-b border-gray-900/10 pb-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Profil
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Bu bilgiler herkese açık olarak gösterilecekti. Bu nedenle ne
        yaptığınıza dikkat edin
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-4'>
          <label
            htmlFor='username'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Kullanıcı Adı
          </label>
          <div className='mt-2'>
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                mushoes.com/
              </span>
              <input
                type='text'
                name='username'
                id='username'
                value={data.username}
                autoComplete='username'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='namıkkorona'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonalInfo() {
  const data = useContext(UserContext)
  return (
    <div className='border-b border-gray-900/10 pb-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>
        Kişisel Bilgiler
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Posta alabileceğiniz kalıcı bir adres kullanın.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label
            htmlFor='first-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Adınız
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='first-name'
              id='first-name'
              value={data.firstName}
              autoComplete='given-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='last-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Soyadınız
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='last-name'
              id='last-name'
              value={data.lastName}
              autoComplete='family-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            E-mail adresiniz
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              value={data.emailAddress}
              type='email'
              autoComplete='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
