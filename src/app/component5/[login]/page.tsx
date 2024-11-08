import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

export const Login = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center  bg-gray-200'>
      <div>
        <h1 className='text-4xl font-bold mb-[70px] capitalize'>Enter your details</h1>
      </div>

<div>
<Image src="/login.png" width="150" height="150" alt=''></Image>
</div>

      <div className='block'>
        <form action="">
          <input className=' border-2 border-black m-2 p-2 w-[350px] ' type="text" placeholder='Enter your name' /> <br />
          <input className=' border-2 border-black m-2 p-2 w-[350px]' type="email"  placeholder='Enter your email'/> <br />
          <input  className=' border-2 border-black m-2 p-2 w-[350px]' type="password" placeholder=' Card Number'/> <br />
          <input className=' border-2 border-black m-2 p-2 w-[350px]' type="text" placeholder='Address'/> <br />
        </form>
      </div>

      <div>
            <Link href="/component6/Done">
        <button className='px-6 py-3 bg-[#243DAD] text-white border border-gray-600 m-2'>place your order</button>
</Link>
        </div>
    </div>
  )
}
export default Login;