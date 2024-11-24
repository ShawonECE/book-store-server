import { Schema, model } from 'mongoose';
import { IBook } from './product.interface';

const BookSchema = new Schema<IBook>(
    {
        title: { 
            type: String, 
            trim: true,
            required: [true, 'Title is required'],  
        },
        author: { 
            type: String, 
            trim: true,
            required: [true, 'Author is required'] 
        },
        price: { 
            type: Number, 
            validate: {
                validator: function(value: number) {
                    return value > 0;
                },
                message: 'Price cannot be negative or zero'
            },
            required: [true, 'Price is required'] 
        },
        category: { 
            type: String, 
            trim: true,
            enum: {
                values: ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
                message: "'{VALUE}' is not valid. Category must be 'Fiction', 'Science', 'SelfDevelopment', 'Poetry' or 'Religious'!!"
            },    
            required: [true, 'Category is required'] 
        },
        quantity: { 
            type: Number,
            min: [0, 'Quantity cannot be negative'],
            validate: {
                validator: function(value: number) {
                    return Number.isInteger(value);
                },
                message: 'Quantity cannot be a fractional number'
            }, 
            required: [true, 'Quantity is required'] 
        },
        inStock: { 
            type: Boolean, 
            required: [true, 'InStock info is required'] 
        },
    },
    {timestamps: true}
);

export const BookModel = model<IBook>('book', BookSchema);