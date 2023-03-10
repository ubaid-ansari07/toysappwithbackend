import express from 'express';
import { list, remove, save, update } from '../controllers/categoryController.js';
const router = express.Router();

    router.get('/list',list);
    router.post('/save',save);
    router.get('/delete/:id',remove)
    router.post('/update',update)
export default router