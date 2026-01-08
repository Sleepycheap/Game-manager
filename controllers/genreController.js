import { getGenres, addGenre } from "../db/queries.js";

export async function getAllGenres(req, res) {
  res.render('genIndex', {
    title: 'Genres',
    genres: await getGenres()
  })
};


export const genreCreateGet = (req, res) => {
  res.render('addGenre', {
    title: 'Create Genre',
  });
};

export async function genreCreatePost(req,res) {
  const {name} = req.body;
  console.log(`Name: ${name}`);
  console.log(`body: ${(Object.values(req.body))}`);
  await addGenre(name);
  // console.log(`Game ${gametitle} saved`);
  res.redirect('/genres');
}