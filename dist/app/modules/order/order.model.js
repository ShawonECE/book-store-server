"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const OrderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                return (0, isEmail_1.default)(value);
            },
            message: 'Invalid email address'
        },
        required: [true, 'Email is required'],
    },
    product: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                return mongoose_1.default.Types.ObjectId.isValid(value);
            },
            message: 'Invalid product id'
        },
        required: [true, 'Product is required']
    },
    quantity: {
        type: Number,
        min: [1, 'Quantity cannot be less than 1'],
        validate: {
            validator: function (value) {
                return Number.isInteger(value);
            },
            message: 'Quantity cannot be a fractional number'
        },
        required: [true, 'Quantity is required']
    },
    totalPrice: {
        type: Number,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Total price cannot be negative or zero'
        },
        required: [true, 'Total price is required']
    },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)('order', OrderSchema);
