import React from 'react'

const FarmIndicatorCard = ({data}) => {
  return (
    <div className="flex w-[300px] border border-gray-100 m-5 ml-20 justify-between items-center shadow-xl rounded-lg">
          <div className="flex flex-col justify-center items-start ">
            <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
              {data.type}:
            </span>
            <div className="flex flex-col pl-5 pb-2">
              <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                {data.result}
              </span>
            </div>
          </div>
          <div>
            <span className="pr-10 text-4xl">{data.ratio}</span>
          </div>
          </div>
  )
}

export default FarmIndicatorCard

/*
<div className="flex w-1/2 border border-gray-100 m-5 ml-20 justify-between items-center shadow-xl rounded-lg">
            <div className="flex flex-col justify-center items-start ">
              <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
                Nitrogen:
              </span>
              <div className="flex flex-col pl-5 pb-2">
                <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                  Good
                </span>
              </div>
            </div>
            <div>
              <span className="pr-10 text-4xl">20%</span>
            </div>
          </div>
        </div>
        */