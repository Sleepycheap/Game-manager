import { getGames, insertGameTitle, updateGame, getGenres, getDevelopers } from "../db/queries.js";
import { test, getName } from '../public/js/helper.js';
import { renderError } from "./errorController.js";

// function getName(name) {
//   console.log(`name: ${name}`);
// }

const testName = getName();

export async function URLTest(req, res) {
  console.log(`TEST REQ: ${Object.values(req.query)}`);
  console.log(`TEST RES: ${Object.keys(res)}`);
} 


export async function getAllGames(req, res) {
  res.render('index', {
    title: 'Game List',
    games: await getGames(),
  })
};


export async function gameCreateGet(req, res){
  res.render('createGame', {
    title: 'create game',
    genres: await getGenres(),
    developers: await getDevelopers()
  });
};

export async function gameCreatePost(req,res) {
  const {name} = req.body;
  const {genre} = req.body;
  const {developer} = req.body;
  console.log(`Game: ${name},${genre}, ${developer}`);
  console.log(`body: ${(Object.values(req.body))}`);
  try {
    await insertGameTitle(name, genre, developer);
    res.redirect('/');
  } catch (err) {
    await renderError(req, res, err);
  }
  // console.log(`Game ${gametitle} saved`);
}

export async function gameUpdateGet(req, res) {
  res.render('updateGame', {
    title: 'Update Game',
    games: await getGames(),
    genres: await getGenres(),
    developers: await getDevelopers()
  });
};

export async function gameUpdatePost(req, res) {
  const {name} = req.body;
  const {genre} = req.body;
  try {
    await updateGame(genre, name);
    res.redirect('/');
  } catch (err) {
    await renderError(req, res, err);
  }
}