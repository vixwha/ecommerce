import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div className="">
            <img src={assets.logo} className='mb-5 w-32 ' />
            <p className='w-full md:w-2/3 text-gray-600'>
It's simple, catchy, and conveys the idea of a central place for all your fashion needs. If you need more options or have a specific theme in mind, let me know!
            </p>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+1-212-456-5675</li>
               <li>contact@foveryou.com</li>
            </ul>
        </div>
        
      </div>
      <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2024@ forever.com All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
