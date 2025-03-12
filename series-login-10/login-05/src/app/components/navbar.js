import React from 'react'

const navbar = () => {
  return (
    <div className="flex justify-between items-center h-18 bg-custom-color text-white border border-black font-bold">
        <div className="text-3xl m-5">
          <span>SHEY</span>
        </div>
        <div>
          <span className="text-xl m-5">Home</span>
          <span className="text-xl m-5">Services</span>
          <span className="text-xl m-5">Contact Us</span>
        </div>
      </div>
  )
}

export default navbar