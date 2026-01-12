import express from 'express';
import {updateGameGet, updateGamePost} from '../controllers/updateController.js';


const updateRouter = express.Router();

updateRouter.get('/:gamename', updateGameGet);
updateRouter.post('/:gamename', updateGamePost);
// updateRouter.post('')

export default updateRouter;