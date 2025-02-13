// require('dotenv').config()
// const express = require('express')
// const cors = require ('cors')

//  const server = express()

//  server.use(cors())
//  server.use(express.json())

//  const PORT = 3000
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//App config

const app = express()
const port = process.env.PORT || 5001;
connectDB()
connectCloudinary()


// middilewares
app.use(express.json())
app.use(cors())

//api end points
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server Started on PORT : '+port))