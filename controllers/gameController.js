import { getGames, insertGameTitle } from "../db/queries.js";

export async function getAllGames(req, res) {
  res.render('index', {
    title: 'Game List',
    games: await getGames()
  })
};


export const gameCreateGet = (req, res) => {
  res.render('createGame', {
    title: 'create game',
  });
};

export async function gameCreatePost(req,res) {
  const {name} = req.body;
  const {genre} = req.body;
  const {developer} = req.body;
  console.log(`Game: ${name},${genre}, ${developer}`);
  console.log(`body: ${(Object.values(req.body))}`);
  await insertGameTitle(name, genre, developer);
  // console.log(`Game ${gametitle} saved`);
  res.redirect('/');
}