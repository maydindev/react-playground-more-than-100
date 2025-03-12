import { CheckIcon } from '@heroicons/react/20/solid'
import { useRef,useState } from 'react'

//"Satın alma planı" butonuna tıklandığında sayfanın en üstüne pürüzsüz bir şekilde kaydırılması gerekiyor
// Ayrıca butona tıklandığında arkaplan renginin anlık olarak değişmesi veya başka bir görsel efektin eklenmesi kullanıcı deneyimini artırabilir.
export default function LandingPage() {
  const pricingRef = useRef()
  const [clicked,setClicked] = useState(false)

  function goToPricing() {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickPurchase = () => {
    window.scrollTo({top:0, /*behavior:"smooth"*/})
    
    setClicked(true)
    setTimeout(() =>{
      setClicked(false)
    },500)
    
  }

  return (
    <>
      <div className='relative pt-14'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Hoş geldiniz
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center'>
                <button
                  onClick={goToPricing}
                  className='rounded-md bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Fiyatlandırmaya gidin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              Fiyatlandırma
            </h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Her büyüklükteki&nbsp;ekip&nbsp;için fiyatlandırma planları
            </p>
          </div>
          <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
          <div
            ref={pricingRef}
            className='isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20'
          >
            <div className={`flex flex-col justify-center rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none ${clicked ? "bg-gray-200" : "bg-white"}`}>
              <div>
                <div className='flex items-center justify-between gap-x-4'>
                  <h3 className='text-indigo-600 text-lg font-semibold leading-8'>
                    Başlangıç
                  </h3>
                  <p className='rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600'>
                    En popüler
                  </p>
                </div>
                <p className='mt-4 text-sm leading-6 text-gray-600'>
                  Hızla büyüyen işinizle ölçeklenen bir plan.
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-4xl font-bold tracking-tight text-gray-900'>
                    $32
                  </span>
                  <span className='text-sm font-semibold leading-6 text-gray-600'>
                    /ay
                  </span>
                </p>
                <ul
                  role='list'
                  className='mt-8 space-y-3 text-sm leading-6 text-gray-600'
                >
                  {[
                    '25 ürün',
                    '10.000 aboneye kadar',
                    'Gelişmiş analitik',
                    '24 saat destek yanıt süresi',
                    'Pazarlama otomasyonları',
                  ].map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href='#'
                className={`mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500`}
                onClick={handleClickPurchase}
              >
                Satın alma planı
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
