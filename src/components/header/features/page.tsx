import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Features = () => {
  return (

<div className='py-[100px]  bg-gray-200'>

    <div className='flex justify-between items-center px-[90px] py-3  bg-gray-200 capitalize font-bold'>
        <h1 className='text-2xl'>featured new cars</h1>
        <h3 className='text-[#b0b9d2]'>view all new cars</h3>
    </div>

<div className='flex px-[90px] py-4 gap-10 capitalize font-medium space-x-2'>
    <h1 className='border-b-2  border-blue-500 py-2'>popular</h1>
    <h1 className='py-2'>upcomming</h1>
    <h1 className='py-2'>newly</h1>
</div>


 <div className="flex space-x-4">
      {/* Less Than Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg left-[60px] relative top-[200px]">
        <span className="text-2xl text-gray-800">&lt;</span> {/* Less Than */}
      </div>

      {/* Greater Than Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg relative left-[1340px] top-[200px]">
        <span className="text-2xl text-gray-800">&gt;</span> {/* Greater Than */}
      </div>
    </div>

    <div className="grid grid-c ols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-200 text-center px-[90px] ">
      {/* <!-- Card 1 --> */}
      <Link href="/components1/car1">
      <div className="bg-white rounded-lg shadow-lg px-6 py-[60px]">
        <Image 
          src="/black.png" 
          alt="Product 1" 
          width={150} 
          height={150} 
          className="w-full h-40 object-cover rounded-t-lg" 
        />
        <h2 className="text-[18px]  mt-2 ">Toyota Corolla</h2>
        <p className="text-[#8fd991] mt-1 text-[15px]   pb-2">PKR 59.7-75.5lacs</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-1 text-gray-600">321 reviews</span>
        </div>
      </div>
      </Link>
      {/* <!-- Card 2 --> */}
      <Link href="/components2/car2">
      <div className="bg-white rounded-lg shadow-lg px-6 py-[60px]">
        <Image 
          src="/wee.png" 
          alt="Product 2" 
          width={150} 
          height={150} 
          className="w-full h-40 object-cover rounded-t-lg" 
        />
        <h2 className="text-[18px]  mt-2 ">Range Rover</h2>
        <p className="text-[#8fd991]  mt-1 text-[15px] pb-2">PKR 39.7-45.5lacs</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-1 text-gray-600">621 reviews</span>
        </div>
      </div>
      </Link>
      {/* <!-- Card 3 --> */}
      <Link href="/components3/car3">
      <div className="bg-white rounded-lg shadow-lg px-6 py-[60px]">
        <Image 
          src="/red.png" 
          alt="Product 3" 
          width={150} 
          height={150} 
          className="w-full h-40 object-cover rounded-t-lg" 
        />
        <h2 className="text-[18px]  mt-2 ">Alto</h2>
        <p className="text-[#8fd991] text-[15px]  pb-2 mt-1">PKR 69.7-95.5lac</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-yellow-500">★★★☆☆</span>
          <span className="ml-1 text-gray-600">428 reviews</span>
        </div>
      </div>
      </Link>
      {/* <!-- Card 4 --> */}
      <Link href="/components4/car4">
      <div className="bg-white rounded-lg shadow-lg px-6 py-[60px]">
        <Image 
          src="/graybg.png" 
          alt="Product 4" 
          width={150} 
          height={150} 
          className="w-full h-40 object-cover rounded-t-lg" 
        />
        <h2 className="text-[18px]  mt-2 ">Honda Civic</h2>
        <p className="text-[#8fd991]  pb-2 text-[15px] mt-1">PKR 69.7-95.5lacs</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-1 text-gray-600">1000 reviews</span>
        </div>
      </div>
      </Link>
    </div>
    </div>
  );
};

export default Features;
