import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

const {products} = useContext (ShopContext);
const [latestProducts,setLatestProducts] = useState([])

 useEffect(()=>{
     setLatestProducts(products.slice(0,10));
 },[products])
  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Step into the world of fashion with our newest collections, where style meets comfort. Our latest arrivals feature a stunning array of apparel for every occasion.  Whether you're dressing up for a special event or looking for everyday essentials, our new arrivals will keep you looking stylish and feeling confident.</p>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} Price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
