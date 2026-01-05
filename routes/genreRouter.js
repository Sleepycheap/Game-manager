import express from 'express';
import { getAllGenres, genreCreateGet, genreCreatePost } from '../controllers/genreController.js';

const genreRouter = express.Router();

genreRouter.get('/', getAllGenres);
genreRouter.get('/create', genreCreateGet);
genreRouter.post('/create', genreCreatePost);

export default genreRouter;