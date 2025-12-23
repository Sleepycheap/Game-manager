import {pool} from './pool.js';

export async function getGames() {
  const {rows} = await pool.query('SELECT * FROM gametitles');
  return rows;
}

export async function insertGameTitle(gametitle) {
  await pool.query('INSERT INTO gametitles (gametitle) VALUES ($1)', [gametitle]);
}