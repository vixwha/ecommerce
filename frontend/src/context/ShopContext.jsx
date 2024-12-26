import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast} from "react-toastify"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const devivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});


    const addToCart = async (itemId,size) => {
        if (!size) {
            toast.error('Select Product Size');
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
    useEffect(()=>{
       console.log(cartItems);
       
    },[cartItems])


    const value ={
          products,currency,devivery_fee,search,setSearch,showSearch,setShowSearch,
          cartItems,addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;