import { getDevelopers, addDeveloper } from "../db/queries.js";

export async function getAllDevelopers(req, res) {
  res.render('devIndex.ejs', {
    title: 'Developer List',
    developers: await getDevelopers()
  })
};


export const developerAddGet = (req, res) => {
  res.render('addDeveloper', {
    title: 'Add a developer',
  });
};

export async function developerAddPost(req, res) {
  const {name} = req.body;
  const {country} = req.body;
  const {year} = req.body;
  console.log(`Game: ${name},${country}, ${year}`);
  console.log(`body: ${(Object.values(req.body))}`);
  await addDeveloper(name, country, year);
  // console.log(`Game ${gametitle} saved`);
  res.redirect('/');
}