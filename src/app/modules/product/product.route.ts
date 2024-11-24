import express from 'express';
import { BookControllers } from './product.controller';

const router = express.Router();

router.post('/', BookControllers.createBook);
router.get('/', BookControllers.getAllBooks);
router.get('/:id', BookControllers.getABook);
router.put('/:id', BookControllers.updateABook);
router.delete('/:id', BookControllers.deleteABook);

export const bookRoutes = router;