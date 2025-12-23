import {Pool} from 'pg';

export const pool = new Pool({
  host: 'localhost',
  user: 'anthonyauthier',
  database: 'games_list',
  password: '082015',
  port: '5432'
});