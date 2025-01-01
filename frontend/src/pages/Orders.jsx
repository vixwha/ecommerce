import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
const {products, currency} = useContext(ShopContext)

  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'MY'} text2={'-ORDERS'}/>
      </div>    
      <div>
        {
          products.slice(1,4).map((item,index) => (
            <div className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4" key={index}>
              <div className="flex items-start gap-6 text-sm ">
                <img src={item.image[0]} className='w-20 sm:w-24' />
                <div className="">
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className=""></div>
                </div>
              </div>

            </div>
          ))
        }
      </div>  
    </div>
  )
}

export default Orders
