import React from 'react';
import { Datas } from "../data/data";
export function Latestproducts() {
    return (
        <div className='w-full h-full my-16'>
            <div className='grid grid-cols-3 gap-10'>
                {Datas.map((data, index) => (
                    <div key={index} className=' text-white '>
                        <div className='rounded-xl group relative'>
                            <img src={data.src} alt="" className='w-full h-96 object-cover rounded-lg ' />
                            <div className='opacity-0 invisible absolute left-0 right-0 transition-opacity duration-300 ease-in-out bg-[#9A9A9A] text-white text-center rounded-b-lg p-5 group-hover:opacity-100 group-hover:visible bottom-0'>
                                ADD TO CART
                            </div>
                        </div>

                        <p className='my-2'>{data.title}</p>
                        <p className='my-2 text-[#B4A186]'>{data.price}</p>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Latestproducts;
