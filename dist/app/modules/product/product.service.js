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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookServices = void 0;
const product_model_1 = require("./product.model");
const createBookIntoDB = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.BookModel.create(book);
    return result;
});
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.BookModel.find();
    return result;
});
const getABookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.BookModel.findOne({ _id: id });
    return result;
});
const updateABookFromDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.BookModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
    return result;
});
const deleteABookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.BookModel.findByIdAndDelete(id);
    return result;
});
exports.bookServices = {
    createBookIntoDB,
    getAllBooksFromDB,
    getABookFromDB,
    updateABookFromDB,
    deleteABookFromDB
};
