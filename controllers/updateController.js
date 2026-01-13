import { getGames, updateGame} from "../db/queries.js";

function getName(name) {
  return name;
}


export async function updateGameGet(req, res) {
  const name = Object.values(req.query)
  res.render('updateGame', {
    title: 'Update Game',
    game: name,
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
  } catch (err) {
    console.log(err);
  }

  res.redirect('/');
}