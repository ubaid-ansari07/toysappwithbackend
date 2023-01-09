import express from 'express';
import { list, remove, save, update } from '../controllers/productController.js';
import multer from 'multer';
const upload=multer({dest:"public/images"});
const router = express.Router();

    router.get('/list',list);
    router.post('/save',upload.single('productImage'),save);
    router.get('/delete/:id',remove)
    router.post('/update',update)
export default router