import { useState } from 'react'
import './styles.css'
import festivalData from './data/festivalData'
import BuyTickets from './components/BuyTickets'
import Footer from './components/Footer'
import PosterSection from './components/PosterSection'

export default function App() {
  return (
    <div className='wrapper'>
      <h1>Festival</h1>

      <PosterSection date='1 Haziran' festivalData={festivalData} />

      <PosterSection date='2 Haziran' festivalData={festivalData} />

      <PosterSection date='3 Haziran' festivalData={festivalData} />

      <BuyTickets />
      <Footer />
    </div>
  )
}
