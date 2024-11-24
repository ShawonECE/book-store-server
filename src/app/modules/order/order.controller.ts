import { Request, Response } from 'express';
import { orderServices } from './order.service';
import mongoose from 'mongoose';

const createOrder = async(req: Request, res: Response) => {
    try {
        const order = req.body;
        const result = await orderServices.createOrderIntoDB(order);

        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Bad request",
            error: error.errors || "Bad request",
            stack: error.stack || null,
        });
    }
};

const getTotalRevenue = async(req: Request, res: Response) => {
    try {
        const result = await orderServices.getTotalRevenueFromDB();

        res.status(200).json({
            success: true,
            message: "Revenue calculated successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Bad request",
            error: error.errors || "Bad request",
            stack: error.stack || null,
        });
    }
};

export const orderControllers = {
    createOrder,
    getTotalRevenue,
};