import express from 'express';

const genreRouter = express.Router();

genreRouter.get('/', getGenres);
genreRouter.get('/create', createGenreGet);
genreRouter.post('/create', createGenrePost);

export default genreRouter;