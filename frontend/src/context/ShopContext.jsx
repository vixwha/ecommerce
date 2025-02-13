import { createContext, useEffect, useState } from "react";

import { toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const devivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();
    const [products,setProducts] = useState([]);


    const addToCart = async (itemId,size) => {
        if (!size) {
            toast.error(' Please select the product size');
            return
            }

        let CartData = structuredClone(cartItems);

        if (CartData[itemId]) {
            if (CartData[itemId][size]) {
                CartData[itemId][size] += 1;
                
            }
            else{
                CartData[itemId][size] = 1;
            }
            
        }
        else{
            CartData[itemId] ={};
            CartData[itemId][size]= 1;
        }
        setCartItems(CartData);

    }


    const getcartCount =() => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]> 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    } 

    const updateQuantity = async (itemId,size,quantity)=>{
        let CartData = structuredClone(cartItems);

        CartData[itemId][size] = quantity;

        setCartItems(CartData);
    }

    const getCartAmount =  () => {
        let totalAmount = 0 ;
        for (const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items );
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
             const response = await axios.get(backendUrl + '/api/product/list')
             if(response.data.success){
                 setProducts(response.data.products)
             }else{
                    toast.error(response.data.message)
             }
             
        } catch (error) {
            console.log(error)
            console.error(error.message)
            
            
        }
    }

  useEffect (()=> {
    getProductsData()
  },[])

    const value ={
          products,currency,devivery_fee,search,setSearch,showSearch,setShowSearch,
          cartItems,addToCart,
          getcartCount,updateQuantity,getCartAmount,navigate,backendUrl
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;