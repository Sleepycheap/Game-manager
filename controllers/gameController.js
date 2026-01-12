import { getGames, insertGameTitle, updateGame } from "../db/queries.js";
// import { getName } from "../public/js/ind.js";

// function getName(name) {
//   console.log(`name: ${name}`);
// }




export async function getAllGames(req, res) {
  res.render('index', {
    title: 'Game List',
    games: await getGames(),
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

export async function gameUpdateGet(req, res) {
  res.render('updateGame', {
    title: 'Update Game',
    games: await getGames()
  });
};

export async function gameUpdatePost(req, res) {
  const {name} = req.body;
  const {genre} = req.body;
  await updateGame(genre, name);
  res.redirect('/');
}