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