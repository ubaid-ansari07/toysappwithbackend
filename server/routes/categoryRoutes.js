import express from 'express';
import { list, save } from '../controllers/categoryController.js';
const router = express.Router();

    router.get('/list',list);
    router.post('/save',save);
    router.get('/delete/:id',)
export default router