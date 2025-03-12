'use client'
import dynamic from 'next/dynamic';
import App from '@/App'

const BrowserOnlyComponent = dynamic(() => import('@/App'), { ssr: false });

const Home = () => {
  return (
    <div>
      <BrowserOnlyComponent />
    </div>
  )
}
export default Home
