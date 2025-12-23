import { getGames, insertGameTitle } from "../db/queries.js";

export async function getAllGames(req, res) {
  res.render('index', {})
  
};


export const gameCreateGet = (req, res) => {
  res.render('createGame', {
    title: 'create game',
  });
};

export async function gameCreatePost(req,res) {
  const {gametitle} = req.body;
  console.log(`gametitle: ${gametitle}`);
  console.log(`body: ${(Object.values(req.body))}`);
  await insertGameTitle(gametitle);
  console.log(`Game ${gametitle} saved`);
  res.redirect('/');
}