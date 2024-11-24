"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookControllers = void 0;
const product_service_1 = require("./product.service");
const mongoose_1 = __importDefault(require("mongoose"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = req.body;
        const result = yield product_service_1.bookServices.createBookIntoDB(book);
        res.status(200).json({
            success: true,
            message: "Book created successfully",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
            error: error.errors || "Internal Server Error",
            stack: error.stack || null,
        });
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.bookServices.getAllBooksFromDB();
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Bad request",
            error: error.errors || "Bad request",
            stack: error.stack || null,
        });
    }
});
const getABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }
        const result = yield product_service_1.bookServices.getABookFromDB(id);
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Bad request",
            error: error.errors || "Bad request",
            stack: error.stack || null,
        });
    }
});
const updateABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }
        if (!updatedData || Object.keys(updatedData).length === 0 || Object.keys(updatedData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Provide a valid data to update",
            });
        }
        const result = yield product_service_1.bookServices.updateABookFromDB(id, updatedData);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Bad request",
            error: error.errors || "Bad request",
            stack: error.stack || null,
        });
    }
});
const deleteABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID format",
            });
        }
        const result = yield product_service_1.bookServices.deleteABookFromDB(id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
            error: error.errors || "Internal Server Error",
            stack: error.stack || null,
        });
    }
});
exports.BookControllers = {
    createBook,
    getAllBooks,
    getABook,
    updateABook,
    deleteABook
};
