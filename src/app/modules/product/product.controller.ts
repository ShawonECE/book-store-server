import { Request, Response } from 'express';
import { bookServices } from './product.service';
import mongoose from 'mongoose';

const createBook = async(req: Request, res: Response) => {
    try {
        const book = req.body;
        const result = await bookServices.createBookIntoDB(book);

        res.status(200).json({
            success: true,
            message: "Book created successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
            error: error.errors || "Internal Server Error",
            stack: error.stack || null,
        });
    }
};

const getAllBooks = async(req: Request, res: Response):Promise<any> => {
    try {
        const result = await bookServices.getAllBooksFromDB();

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No books found",
                data: result
            });
        }

        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
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

const getABook = async(req: Request, res: Response):Promise<any> => {
    try {
        const id = req.params.id;

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }

        const result = await bookServices.getABookFromDB(id);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "No book found",
                data: result
            });
        }

        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
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

const updateABook = async(req: Request, res: Response):Promise<any> => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }

        if (!updatedData || Object.keys(updatedData).length === 0|| Object.keys(updatedData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Provide a valid data to update",
            });
        }

        const result = await bookServices.updateABookFromDB(id, updatedData);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "No book found",
                data: result
            });
        }

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Bad request",
            error: error.errors || "Bad request",
            stack: error.stack || null,
        });
    }
};

const deleteABook = async(req: Request, res: Response):Promise<any> => {
    try {
        const id = req.params.id;

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }

        const result = await bookServices.deleteABookFromDB(id);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "No book found",
                data: result
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
            error: error.errors || "Internal Server Error",
            stack: error.stack || null,
        });
    }
};

export const BookControllers = {
    createBook,
    getAllBooks,
    getABook,
    updateABook,
    deleteABook
};