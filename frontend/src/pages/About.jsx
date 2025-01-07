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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eaque fugiat debitis? Amet aut velit quia, fugit nostrum facere obcaecati, nihil ipsum dolore et, magni placeat id fuga necessitatibus exercitationem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic non a temporibus enim voluptatum quod placeat esse nulla quibusdam autem sed quaerat magni, culpa accusamus. Minus fugiat eius officiis officia?</p>
          <b className='text-gray-600'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab officiis excepturi! Veniam magnam deleniti labore est qui mollitia, nisi porro eum commodi id, quod rem, atque suscipit quas repellendus!</p>
        </div>
        
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex felc-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 rounded-md">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic laudantium laborum ad sed, labore tempora.</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 rounded-md">
          <b>Convenice:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic laudantium laborum ad sed, labore tempora..</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 rounded-md">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic laudantium laborum ad sed, labore tempora.</p>
        </div>
        
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
