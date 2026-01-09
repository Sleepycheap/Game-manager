import express from 'express';
import { gameCreateGet, gameCreatePost, getAllGames, gameUpdateGet, gameUpdatePost } from '../controllers/gameController.js';

const gameRouter = express.Router();

gameRouter.get('/', getAllGames);
gameRouter.get('/create', gameCreateGet);
gameRouter.post('/create', gameCreatePost);

gameRouter.get('/update', gameUpdateGet);
gameRouter.post('/update', gameUpdatePost);

export default gameRouter;