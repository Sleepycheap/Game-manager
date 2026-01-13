import express from 'express';
import { gameCreateGet, gameCreatePost, getAllGames, gameUpdateGet, gameUpdatePost, URLTest } from '../controllers/gameController.js';

const gameRouter = express.Router();

gameRouter.get('/', getAllGames);
gameRouter.get('/create', gameCreateGet);
gameRouter.post('/create', gameCreatePost);
gameRouter.get('/test', URLTest);

// gameRouter.get('/update', gameUpdateGet);
// gameRouter.post('/update', gameUpdatePost);

export default gameRouter;