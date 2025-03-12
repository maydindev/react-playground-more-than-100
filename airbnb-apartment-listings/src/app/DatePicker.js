import React from 'react'

const DatePicker = ({firstDate,onClickFirstDate,lastDate,onClickLastDate}) => {
  return (
    <div classname="flex justify-center mb-8 space-x-4">
        <input type="date" value={firstDate || ""} onChange={(e) => onClickFirstDate(e.target.value)} className="border border-gray-300 p-2 rounded mr-5"/>
        <input type="date" value={lastDate || ""} onChange={(e) => onClickLastDate(e.target.value)} className="border border-gray-300 p-2 rounded" />
    </div>
  )
}

export default DatePicker