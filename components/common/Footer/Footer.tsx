import { Input } from '@/components/ui/input'
import React from 'react'
import { IoSendOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='mt-10'>
      <div className=''>
        <div className='bg-black  rounded-t-lg sm:flex sm:flex-wrap '>
          <div className='pt-5 pl-5 space-y-2 sm:w-1/2 lg:w-1/4'>
            <h3 className='text-white   tracking-wider capitalize text-2xl font-bold  cursor-pointer'>Exclusive</h3>
            <h4 className='text-white   tracking-widercapitalize cursor-pointer mt-2'>Subscribe</h4>
            <p className='text-white  tracking-wider capitalize cursor-pointer'>Get 10% off your first order</p>
            <div className='border-2 border-white w-fit w-max-[20rem] flex justify-center rounded-md cursor-pointer'>
              <Input placeholder='Enter you email' className='bg-black text-white text-xs focus-visible:ring-offset-0 focus-visible:ring-0 outline-none border-none ' />
              <IoSendOutline className='cursor-ponter text-white align-center m-auto pr-2' size={30} />
            </div>
          </div>

          <div className=' mt-10 pl-5   space-y-2 sm:w-1/2 lg:w-1/4'>
            <h3 className='capitalize  tracking-wider text-2xl font-bold text-white cursor-pointer'>Support </h3>
            <div>
              <p className='text-white  tracking-wider cursor-pointer mt-2'>111 Bijoy sarani, Dhaka</p>
              <p className='text-white  tracking-wider cursor-pointer'> DH 1515, Bangladesh.</p>
            </div>
            <p className='text-white  tracking-wider cursor-pointer'>kushc225@gmail.com</p>
            <p className='text-white  tracking-wider cursor-pointer'>+88015-88888-9999</p>
          </div>
          <div className='mt-10 ml-5 space-y-2 sm:w-1/2 lg:w-1/4'>
            <h3 className='text-white cursor-pointer  tracking-wider text-2xl font-bold space-y-4'>Account</h3>
            <p className='text-white  cursor-pointer  tracking-wider capitalize mt-2'>my Account</p>
            <p className='text-white  tracking-wider cursor-pointer capitalize'>Login / Register</p>
            <p className='text-white tracking-wider  cursor-pointer capitalize'>Cart</p>
            <p className='text-white tracking-wider  cursor-pointer capitalize'>Wishlist</p>
            <p className='text-white tracking-wider  cursor-pointer capitalize'>Shopv</p>
          </div>

          <div className='mt-10 ml-5 space-y-2 '>
            <h3 className='text-white cursor-pointer tracking-wider  text-2xl font-bold space-y-4'>Quick Link</h3>
            <p className='text-white cursor-pointer  tracking-wider capitalize mt-2'>Privacy Policy</p>
            <p className='text-white cursor-pointer  tracking-wider capitalize'>Terms of use </p>
            <p className='text-white cursor-pointer  tracking-wider uppercase'>faq</p>
            <p className='text-white cursor-pointer  tracking-wider capitalize'>contact</p>
          </div>
        </div>
        <div className='bg-black pt-2 px-2  text-left pl-5 rounded-b-lg pb-2 sm:text-center sm:pl-0 sm:pt-5 lg:pt-10'  >
          <p className='font-bold sm:text-xl lg:text-sm border-t-2 py-5 lg:py-2 border-slate-400/10 text-white/30'>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer