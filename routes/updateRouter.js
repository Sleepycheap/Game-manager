import express from 'express';
import {updateGameGet, updateGamePost} from '../controllers/updateController.js';


const updateRouter = express.Router();

updateRouter.get('/', updateGameGet);
updateRouter.post('/', updateGamePost);
// updateRouter.post('')

export default updateRouter;