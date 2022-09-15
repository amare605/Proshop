import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    orderItems: [
        {
            name:{ type: String, required: true},
            Qty:{ type: Number, required: true},
            image:{ type: String, required: true},
            price:{ type: String, required: true},
            product:{ 
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        }
    ],

    shippingAddress: {
        address: { type: String, required: true},
        city: { type: String, required: true},
        postalCode: { type: String, required: true},
        country: { type: String, required: true},
        
    },

    paymentMethod: {
        type: String,
        required: true,
    },

    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_item: {type: String},
        email_address:  {type: String},
    },

    taxedPrice: {
        type: String,
        required: true,
        default: 0.0
    },

    shippingPrice: {
        type: String,
        required: true,
        default: 0.0
    },

    totalPrice: {
        type: String,
        required: true,
        default: 0.0
    },

    isPaid: {
        type: String,
        required: true,
        default: false
    },

    paidAt: {
        type: Date
    },

    isDelivered:{
        type: String,
        required: true,
        default: false 
    },

    deliverdAt: {
        type: Date
    },
}, {
    timestamps: true
})

const Order = mongoose.model('Order' , orderSchema)

export default Order