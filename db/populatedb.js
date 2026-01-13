import {Client} from 'pg';
import 'dotenv';

const SQL = `
CREATE TABLE IF NOT EXISTS genres (
  name VARCHAR (255) PRIMARY KEY
  );
  
  CREATE TABLE IF NOT EXISTS developers (
  id INTEGER,
  name VARCHAR (255) PRIMARY KEY,
  country VARCHAR (255), 
  year INTEGER (255)
  );

  CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255),
  genre VARCHAR (255) references genres(name),
  developer VARCHAR (255) references developers(name)
  );

  INSERT INTO genres (name)
  VALUES
  ('RPG'),
  ('Puzzle'),
  ('Adventure'),
  ('Platformer'),
  ('Strategy'),
  ('Action')
  ('Stealth');

  INSERT INTO developers (name, country, year)
  VALUES 
  ('Konami', 'Japan', '1963'),
  ('Nintendo', 'Japan', '1880'),
  ('SquareEnix', 'Japan', '2004'),
  ('SquareSoft', 'Japan', '1980'),
  ('Team Cherry', 'Australia', '2014');

  INSERT INTO games (name, genre, developer)
  VALUES
  ('Hollow Knight', 'Platfomer', 'Team Cherry'),
  ('Final Fantasy 10', 'RPG', 'SquareEnix'),
  ('Metal Gear Solid', 'Stealth', 'Konami'),
  ('Super Mario Bros.', 'Platformer', 'Nintendo');
  `;

async function main() {
  try {
    console.log('seeding...');
    const client = new Client({
      connectionString: 'postgresql://games_list_h0ak_user:9K9E3gjUcsxHDJDQhdUmlP3TbgbuzJ6L@dpg-d5jcl9ali9vc73e47o0g-a.oregon-postgres.render.com/games_list_h0ak?ssl=true'
    });
    await client.connect();
    // await client.query(SQL);
    await client.end();
    console.log('done');
  }catch (err) {
    console.log(err);
  }
  }

main();