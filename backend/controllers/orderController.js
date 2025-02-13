import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'Stripe';

// global Variables
const currency = 'inr'
const deliveryCharge = 10

// Stripe Gate way initialize
const stripe = new Stripe(process.env.STRIP_SECRET_KEY)


// palcing orders using COD


const placeOrder =  async (req, res) => {
 try {
    const {userId,items,amount,address} = req.body;

    const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
       payment:false,
       date: Date.now()
    }

     const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed Successfully"})

 } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
 }
}


// palcing orders using stripe
const placeOrderStripe =  async (req, res) => {
 try {
    
  const {userId,items,amount,address} = req.body;
  const { origin } = req.headers;


  const orderData = {
    userId,
    items,
    address,
    amount,
    paymentMethod:"Stripe",
   payment:false,
   date: Date.now()
  }

   const newOrder = new orderModel(orderData)
        await newOrder.save()

    const line_items = items.map((item)=>(
      {price_data: {
        currency:currency,
        product_data:{
          name:item.name
        },
        unit_amount: item.price* 100
      },
      quantity: item.quantity
    }
    ))    
    line_items.push({
      price_data: {
        currency:currency,
        product_data:{
          name:"Delivery Charges"
        },
        unit_amount: deliveryCharge* 100
      },
      quantity: 1
    })

    const session = await stripe.checkout.sessions.create({
      success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode:"payment",

    })

    res.json({success:true,session_url:session.url});


 } catch (error) {
  console.log(error);
    res.json({success:false,message:error.message})
 }
}
// Verify Stripe
const verifyStripe = async(req,res)=>{
  const {orderId,success,userId} = req.body

  try {
      
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {payment:true});
      await userModel.findByIdAndUpdate(userId,{cartData:{}});
      res.json({success:true});

    }else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false,message:error.message})
    }

  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}

// palcing orders using Razorpay
const placeOrderRazorpay =  async (req, res) => {

}

// all orders data for admin
const allOrders =  async (req, res) => {

  try {
    const orders = await orderModel.find({})
    res.json({success:true,orders})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }

}

// user orders data for font end
const userOrders =  async (req, res) => {
  try {
    const {userId} = req.body

    const orders = await orderModel.find({ userId })
    res.json({success:true,orders})

  } catch (error) {
   console.log(error);
    res.json({success:false,message:error.message})
  }
}

//update order status for admin
const updateStatus =  async (req, res) => {
  try {
    
         const {orderId,status} = req.body
         await orderModel.findByIdAndUpdate(orderId,{status})
         res.json({success:true,message:"Status Updated Successfully"})

  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}

export {verifyStripe,placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}

