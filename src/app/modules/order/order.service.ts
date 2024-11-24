import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async(order: IOrder) => {
    const result = await OrderModel.create(order);
    return result;
};

const getTotalRevenueFromDB = async () => {
    const result = await OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" }
            }
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1
            }
        }
    ]);
    return result;
};

export const orderServices = {
    createOrderIntoDB,
    getTotalRevenueFromDB,
};