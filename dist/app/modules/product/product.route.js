"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.BookControllers.createBook);
router.get('/', product_controller_1.BookControllers.getAllBooks);
router.get('/:id', product_controller_1.BookControllers.getABook);
router.put('/:id', product_controller_1.BookControllers.updateABook);
router.delete('/:id', product_controller_1.BookControllers.deleteABook);
exports.bookRoutes = router;
