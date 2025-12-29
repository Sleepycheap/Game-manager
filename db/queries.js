import {pool} from './pool.js';

export async function getGames() {
  const {rows} = await pool.query('SELECT * FROM gametitles');
  return rows;
}

export async function insertGameTitle(title, genre, developer) {
  await pool.query('INSERT INTO gametitles (title, genre, developer) VALUES ($1, $2, $3)', [title, genre, developer]);
}