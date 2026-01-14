import {pool} from './pool.js';

export async function getGames() {
  const {rows} = await pool.query('SELECT * FROM games');
  return rows;
}

export async function insertGameTitle(name, genre, developer) {
  await pool.query('INSERT INTO games (name, genre, developer) VALUES ($1, $2, $3)', [name, genre, developer]);
}

export async function getDevelopers() {
  const {rows} = await pool.query('SELECT * FROM developers');
  return rows;
};

export async function addDeveloper(name, country, year) {
  await pool.query('INSERT INTO developers (name, country, year) VALUES ($1, $2, $3)', [name, country, year]);
};

export async function getGenres() {
  const {rows} = await pool.query('SELECT * FROM genres');
  return rows;
};

export async function addGenre(name) {
  await pool.query('INSERT INTO genres (name) VALUES ($1)', [name]);
};

export async function updateGame(game, name) {
  // await pool.query('UPDATE games SET (genre) = ROW($1) WHERE (name) = ($2)', [genre, name]);
  await pool.query('UPDATE games SET genre = $1, developer = $2 WHERE name = $3', [game.genre, game.developer, name])
}

export async function deleteGame(name) {
  await pool.query('DELETE FROM games WHERE name = $1', [name])
}

