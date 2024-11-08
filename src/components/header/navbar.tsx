import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-black text-white h-0 p-[50px]'>
        <div>
            <Image src="/logo.png" width = "150" height = "150" alt=''></Image>
        </div>
        <div >
        <ul className="flex gap-10 capitalize text-[16px] cursor-pointer">
      <li className="flex items-center">
        used cars
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        new cars
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        bikes
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        auto store
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        videos
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        forum
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        blog
        <span className="ml-1 text-xs">▼</span>
      </li>
      <li className="flex items-center">
        more
        <span className="ml-1 text-xs">▼</span>
      </li>
    </ul>
        </div>

        <div className=''>
            <div className="py-2 text-sm pl-3 capitalize">
                <Link href="" className='border-r-2  px-1 '>sign up</Link>
                <Link href=""> sign in</Link>
            </div>
            <div >
                    <li className="flex items-center bg-red-800 w-max px-4 py-2 capitalize">
                post on ad
                <span className="ml-1 text-xs">▼</span>
                    </li>
            </div>
        </div>
    </div>
  )
}
export default Navbar;