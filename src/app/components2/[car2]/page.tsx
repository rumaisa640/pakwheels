import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Car2 = () => {
  return (

    <div className='h-screen flex flex-col justify-center items-center  bg-gray-200'>
        <h1 className='text-4xl font-bold underline capitalize pb-10'> range rover 2024 price in pakistan , images,reviews and specs</h1>
    <div>
            <Image src="/white.png" width="370" height="370" alt=''></Image>
        </div>
        <div className='p-5'>
            <button className='px-6 py-3 bg-[#243DAD] text-white border border-gray-600 m-2'>book a test driver</button>
            <button className='px-6 py-3 bg-white text-black border border-gray-600 m-2'>request bank finance</button>
            <button className='px-6 py-3 bg-white text-black border border-gray-600 m-2'>visit place</button>
            <button className='px-6 py-3 bg-white text-black border border-gray-600 m-2'>car inspection</button>
        </div>

        <div>
            <h1 className='text-2xl capitalize my-5 text-center'>vehicle description</h1>
            <div className="capitalize">
                <div className='flex gap-10 mb-3'>
                <p>number of doors : <span className='text-gray-400'> 4</span></p>
                <p>engine :<span  className='text-gray-400'> 1800cc</span></p>
                <p>condition :<span className='text-gray-400'> 8.5/10</span></p>
                <p>driven :<span className='text-gray-400'> 9,500KM</span></p>
                <p>suspension type :<span className='text-gray-400'> soft suspension</span></p>
                </div>
                <div className='flex gap-10'>
               
                <p>avg :<span className='text-gray-400'> 13 km / ltr</span></p>
                <p>transmission :<span className='text-gray-400'> automatic</span></p>
                <p>fuel type :<span className='text-gray-400'> high octane</span></p>
                </div>
            </div>
        </div>

        <div>
            <h1 className='text-[#78d07b] m-9 font-bold text-2xl'>PKR 89,00,000</h1>
        </div>

        <div>
        <Link href="/component5/login">
        <button className='px-6 py-3 bg-[#243DAD] text-white border border-gray-600 m-2'> make a project</button>
</Link>
        </div>
    </div>
  )
}
export default Car2;