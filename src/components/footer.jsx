import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
export const Footer = () => {
  return (
    <div className='text-[#2F2F2F] border-t border-gray-400 w-full mt-[30rem] h-2/6'>
      <div className='flex justify-between mt-12   '>
        <p className='hover:text-white'>CONTACT</p>
        <p className='hover:text-white'>TERMS OF SERVICES</p>
        <p className='hover:text-white'>SHIPPING AND RETURNS</p>

        <div className='flex items-center gap-5 border-b border-gray-400 pb-4 group'>
          <p className='group-hover:text-white'>Give an email, get the newsletter.</p>
          <FaArrowRight className='group-hover:text-white' />
        </div>

      </div>

      <div className='flex justify-between mt-8 w-full h-8'>
        <p><span className='text-white'>© 2021 Shelly.</span> Terms of use <span className='text-white'>and</span> privacy policy.</p>
        <div className='flex gap-5 items-center'>
          <TiSocialLinkedin className='w-full h-4/6 hover:text-white' />
          <FaFacebookSquare className='w-full h-4/6 hover:text-white' />
          <FaInstagram className='w-full h-4/6 hover:text-white' />
          <CiTwitter className='w-full h-4/6 hover:text-white' />
        </div>
      </div>

    </div>
  )
}
