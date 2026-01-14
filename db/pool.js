import {Pool} from 'pg';
import dotenv from 'dotenv';
const connectionString = process.env.PGDATABASE
export const pool = new Pool({
  host: 'localhost',
  user: 'anthonyauthier',
  database: 'games_list',
  password: '082015',
  port: '5432'
});

// export const pool = new Pool({
//   connectionString
// });