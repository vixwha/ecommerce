import express from 'express';
import { placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe, } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const oredrRouter = express.Router()

//Admin features
oredrRouter.post('/list',adminAuth,allOrders)
oredrRouter.post('/status',adminAuth,updateStatus)

//payment features
oredrRouter.post('/place',authUser,placeOrder)
oredrRouter.post('/razorpay',authUser,placeOrderRazorpay)
oredrRouter.post('/stripe',authUser,placeOrderStripe)

//user features
oredrRouter.post('/userorders',authUser,userOrders)

// Verify payment
oredrRouter.post('/verifyStripe',authUser,verifyStripe)

export default oredrRouter