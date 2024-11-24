"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
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
            validator: function (value) {
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
            validator: function (value) {
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
}, { timestamps: true });
exports.BookModel = (0, mongoose_1.model)('book', BookSchema);
