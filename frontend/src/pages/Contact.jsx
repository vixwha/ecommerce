import React from 'react'
import Title from "../components/Title";
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px] rounded-lg' src={assets.contact_img} alt="" />
        <div className=" inline-block justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600 mb-5'>Our Store</p>
          <p className='text-gray-500 mb-2'>54709 Willms station <br />suite,washinton,US</p>
          <p className='text-gray-500'>Tel: (415) 555-0123 <br />Email: admin@forever.com</p>
          <p className='mt-20 mb-3 font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className='mt-7 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg'>Explore Jobs</button>
          
          </div>
          
        </div>
        <NewsletterBox/>
      </div>
    
  )
}

export default Contact
