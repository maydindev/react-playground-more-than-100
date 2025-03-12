import { useState } from 'react'

export default function LeftSideBar() {
  const buttonElements = [
    'Home',
    'Categories',
    'Explore',
    'Favorites',
    'Notifications',
    'Messages',
    'Profile',
    'Settings',
  ].map((option) => (
    <button className={option.toLowerCase()} key={crypto.randomUUID()}>
      {option}
    </button>
  ))

  return (
    <div className='left-side-bar'>
      <div className='left-side-bar-inner-container'>{buttonElements}</div>
    </div>
  )
}
