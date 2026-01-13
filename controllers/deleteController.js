import { deleteGame } from "../db/queries.js";

export async function deleteGet(req, res) {
  const name = Object.values(req.query);
  res.render('deleteGame', {
    title: 'Delete Game',
    game: name 
  })
}

export async function deletePost(req, res) {
  const {name} = req.query;
  await deleteGame(name)
  res.redirect('/');
}