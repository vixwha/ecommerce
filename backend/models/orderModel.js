import mongoose from 'mongoose';


const orderSchema = mongoose.Schema({
    userId: { type: String, required: true },
    items :{ type: Array, required: true },
    amount: { type: Number, required: false }, 
    address :{ type: Object, required: true },
    status: { type: String, required: true, default: 'Order placed' },
    paymentMethod : { type: String, required: true },
    payment : { type: Boolean, required: true , default: false },
    date: { type: Number, required: true }

})


const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;