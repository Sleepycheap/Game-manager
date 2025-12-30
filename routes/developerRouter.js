import express from 'express';
import { ExpressValidator } from 'express-validator';
import { getAllDevelopers, developerAddGet, developerAddPost } from '../controllers/developerController.js'

const developerRouter = express.Router();

developerRouter.get('/', getAllDevelopers);
developerRouter.get('/create', developerAddGet);
developerRouter.post('/create', developerAddPost);

export default developerRouter;