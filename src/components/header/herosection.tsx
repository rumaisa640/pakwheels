import React from 'react'

export const Herosection = () => {
  return (
    <div className='bg-gray-200 '>
        <div className='text-center p-[10px] capitalize text-2xl relative top-[70px] text-gray-600 bg-gray-200 w-max ml-[31%]' >
            <h1>sale your cars on pakwheels and get the best price</h1>
        </div>

{/* part1 */}

<div className='inline-flex justify-center items-center gap-10 p-16 border border-gray-400 ml-[23%] mt-11'>
  <div>
    <div>
      <h1 className='py-3 text-[#505182] text-2xl capitalize space-x-1'>post your ad on pakwheels</h1>
    </div>
    <div className='leading-[2] font-normal text-[16px] capitalize text-[#A3A3A3]'>
      <ul className="list-none">
        <li className="flex items-center">
          <span className="mr-2">✔️</span> post your ad for free in 3 easy steps
        </li>
        <li className="flex items-center">
          <span className="mr-2">✔️</span> get genuine offers from verified buyers
        </li>
        <li className="flex items-center">
          <span className="mr-2">✔️</span> sell your car fast at the best price
        </li>
      </ul>
    </div>

    <div>
      <button className="text-white px-8 py-2 rounded capitalize bg-red-800 my-4">
        post on ad
      </button>
    </div>
  </div>

  {/* hr */}
  <div className="flex items-center justify-center gap-4">
  <div className="relative flex items-center">
    <div className="w-[1px] h-[230px] bg-gray-400"></div>
    <span className="absolute top-1/2 transform -translate-y-1/2 -ml-4 bg-gray-200 px-2 text-gray-600">
      OR
    </span>
  </div>
</div>



  {/* part2 */}

  <div>
    <div className='py-3 text-[#505182] text-2xl capitalize space-x-1'>
      <h1>post your ad on pakwheels</h1>
    </div>
    <div className='leading-[2] font-normal text-[16px] capitalize text-[#A3A3A3]'>
      <ul className="list-none">
        <li className="flex items-center">
          <span className="mr-2">✔️</span> post your ad for free in 3 easy steps
        </li>
        <li className="flex items-center">
          <span className="mr-2">✔️</span> get genuine offers from verified buyers
        </li>
        <li className="flex items-center">
          <span className="mr-2">✔️</span> sell your car fast at the best price
        </li>
      </ul>
    </div>

    <div>
      <button className="text-white px-8 py-2 rounded capitalize bg-[#4E90CC] my-4">
        post on ad
      </button>
    </div>
  </div>
</div>

    </div>
  )
}
export default Herosection;
