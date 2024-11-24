import { IBook } from './product.interface';
import { BookModel } from './product.model';

const createBookIntoDB = async(book: IBook) => {
    const result = await BookModel.create(book);
    return result;
};

const getAllBooksFromDB = async() => {
    const result = await BookModel.find();
    return result;
};

const getABookFromDB = async(id: string) => {
    const result = await BookModel.findOne({ _id: id });
    return result;
};

const updateABookFromDB = async(id: string, updatedData: object) => {
    const result = await BookModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
    return result;
};

const deleteABookFromDB = async(id: string) => {
    const result = await BookModel.findByIdAndDelete(id);
    return result;
};

export const bookServices = {
    createBookIntoDB,
    getAllBooksFromDB,
    getABookFromDB,
    updateABookFromDB,
    deleteABookFromDB
};