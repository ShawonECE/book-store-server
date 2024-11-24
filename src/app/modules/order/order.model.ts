import mongoose, { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';
import isEmail from 'validator/lib/isEmail';

const OrderSchema = new Schema<IOrder>(
    {
        email: { 
            type: String, 
            trim: true,
            validate: {
                validator: function(value: string) {
                    return isEmail(value);
                },
                message: 'Invalid email address'
            },
            required: [true, 'Email is required'],  
        },
        product: { 
            type: String, 
            trim: true,
            validate: {
                validator: function(value: string) {
                    return mongoose.Types.ObjectId.isValid(value);
                },
                message: 'Invalid product id'
            },
            required: [true, 'Product is required'] 
        },
        quantity: { 
            type: Number, 
            min: [1, 'Quantity cannot be less than 1'],
            validate: {
                validator: function(value: number) {
                    return Number.isInteger(value);
                },
                message: 'Quantity cannot be a fractional number'
            },
            required: [true, 'Quantity is required'] 
        },
        totalPrice: { 
            type: Number, 
            validate: {
                validator: function(value: number) {
                    return value > 0;
                },
                message: 'Total price cannot be negative or zero'
            },
            required: [true, 'Total price is required'] 
        },
    },
    {timestamps: true}
);

export const OrderModel = model<IOrder>('order', OrderSchema);