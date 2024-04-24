import React from 'react';
import { FiSearch } from "react-icons/fi";

const ShopLatest = () => {
  return (
    <div className='w-52 h-full text-white lg:my-16 lg:mx-32 flex items-center flex-col'>
      <p>Shop The Latest</p>
      <div className='border-b-2 border-[#3D3D3D] flex items-center'>
        <input type="text" className='bg-black outline-none' />
        <FiSearch size={24} className='text-gray-500' />
      </div>
    </div>
  );
}

export default ShopLatest;
