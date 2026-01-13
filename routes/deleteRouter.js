import express from 'express';
import { deleteGet, deletePost } from '../controllers/deleteController.js';

const deleteRouter = express.Router();

deleteRouter.get('/', deleteGet);
deleteRouter.post('/', deletePost);

export default deleteRouter;