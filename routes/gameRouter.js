import express from 'express';
import { gameCreateGet, gameCreatePost, getAllGames } from '../controllers/gameController.js';

const gameRouter = express.Router();

gameRouter.get('/', getAllGames);
gameRouter.get('/create', gameCreateGet);
gameRouter.post('/create', gameCreatePost);

export default gameRouter;