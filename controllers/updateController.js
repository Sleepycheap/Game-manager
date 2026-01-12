import { getGames, updateGame} from "../db/queries.js";

function getName(name) {
  return name;
}


export async function updateGameGet(req, res) {
  console.log('test');
  // console.log(`params: ${Object.entries(req)}`);
  res.render('updateGame', {
    title: 'Update Game',
    game: 'Metroid',
  })
};

export async function updateGamePost(req, res) {
  console.log(`Body: ${Object.entries(req.body)}, Query: ${Object.entries(req)}`);
  await updateGame(req.body, req.query);

  res.redirect('/');
}