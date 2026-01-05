import {Pool} from 'pg';

export const pool = new Pool({
  host: 'localhost',
  user: 'anthony',
  database: 'games_list',
  password: '082015',
  port: '5432'
});