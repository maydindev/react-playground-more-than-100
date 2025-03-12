import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid'

//bannerData'yı göstermek için süslü parantez kullanın
export default function Banner() {
  const bannerData = {
    icon: <Icon className='h-5 w-5 text-blue-400' aria-hidden='true' />,
    version: 4,
    href: '/details',
  }

  return (
    <div className='banner-wrapper'>
      <div className='flex'>
        <div className='flex-shrink-0'>{bannerData.icon}</div>
        <div className='banner-content'>
          <p className='banner-text'>
            Yeni bir yazılım güncellemesi mevcuttur. Sürümdeki yenilikleri
            inceleyin
          </p>
          <p className='banner-details'>
            <a href={bannerData.href} className='banner-details-link'>
              Detaylar 
              <span aria-hidden='true'> &rarr; {bannerData.version}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
