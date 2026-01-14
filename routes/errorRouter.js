import express from 'express';
import { renderError } from '../controllers/errorController.js';

const errorRouter = express.Router();

errorRouter.get('/', renderError);

export default errorRouter;