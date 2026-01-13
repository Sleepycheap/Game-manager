import express from 'express';
import {join} from 'node:path';
import { fileURLToPath } from 'node:url';
import gameRouter from './routes/gameRouter.js';
import developerRouter from './routes/developerRouter.js';
import genreRouter from './routes/genreRouter.js';
import updateRouter from './routes/updateRouter.js';
import deleteRouter from './routes/deleteRouter.js';
const dirname = fileURLToPath(new URL('.', import.meta.url));
const filepath = join(dirname, 'views');
const assetsPath = join(dirname, 'public');
const dbPath = join(dirname, 'db');

const app = express();

app.use(express.static(assetsPath));
app.use(express.static(dbPath));
app.use(express.urlencoded({ extended: true}));
app.set('views', filepath);
app.set('view engine', 'ejs');


const port = 8080;

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Express running on port: ${port}`);
});



app.use('/', gameRouter);
app.use('/developer', developerRouter);
app.use('/genres', genreRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
