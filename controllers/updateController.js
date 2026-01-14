import { getGames, updateGame, getDevelopers, getGenres} from "../db/queries.js";
import {renderError} from "./errorController.js";

function getName(name) {
  return name;
}


export async function updateGameGet(req, res) {
  const name = Object.values(req.query)
  res.render('updateGame', {
    title: 'Update Game',
    game: name,
    genres: await getGenres(),
    developers: await getDevelopers()
  })
};

export async function updateGamePost(req, res) {
  const {genre} = req.body;
  const {developer} = req.body;
  const {name} = req.query;
  const data = req.body;
  // console.log(`data: ${data.genre}, ${data.developer}, name: ${name}`);

  try {
    await updateGame(data, name);
    console.log('update suceeded');
    res.redirect('/');
  } catch (err) {
    console.log(err);
    await renderError(req, res, err);
  }
  
}