import { useEffect, useState } from 'react'

const tabs = ['Hesabım', 'Şirket', 'Ekip Üyeleri', 'Faturalama']
// State setter fonksiyonunu kullanarak geçerli sekmeyi güncelleyin (tıklandığında görünümünü değiştirmek için)
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('Hesabım')
  //let currentTab = "Hesabım";

  return (
    <div className='flex justify-center my-8'>
      <div className='flex space-x-4' aria-label='Tabs'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              //currentTab = tab
              setCurrentTab(tab)
            }}
            className={`${
              tab === currentTab
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            } rounded-md px-3 py-2 text-sm font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
