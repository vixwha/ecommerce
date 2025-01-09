import React from 'react'
import Title from "../components/Title";
import { assets } from '../assets/assets';
import './About.css'
import NewsletterBox from"../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px] rounded-lg' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to forever, where fashion meets passion. We are a dedicated team of fashion enthusiasts committed to bringing you the latest trends and timeless classics.</p>
          <p>At forever, we believe that fashion is more than just clothing; it's a way to express yourself and tell your story.</p>
          <b className='text-gray-600'>Our Mission</b>
        <p> Our mission is to provide high-quality, stylish clothing that makes you feel confident and comfortable.</p>
        </div>
        
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex felc-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 rounded-md">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We guarantee high-quality clothes that you’ll love.</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 rounded-md">
          <b>Convenice:</b>
          <p className='text-gray-600'>We make shopping easy and hassle-free.</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 rounded-md">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We provide exceptional customer service to meet your needs.</p>
        </div>
        
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
