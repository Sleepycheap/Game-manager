import express from 'express';
import { ExpressValidator } from 'express-validator';

const developerRouter = express.Router();

developerRouter.get('/', getDevelopers);
developerRouter.get('/create', createDevelopersGet);
developerRouter.post('/create', createDevelopersPost);

export default developerRouter;