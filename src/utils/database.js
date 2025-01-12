import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

const sqlite = new SQLiteConnection(CapacitorSQLite);

export const initDB = async () => {
  try {
    const db = await sqlite.createConnection('mydb', false, 'no-encryption', 1);
    await db.open();

    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
      );
    `);

    console.log('Database initialized');
    await sqlite.closeConnection('mydb');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

export const insertUser = async (name, age) => {
  try {
    const db = await sqlite.createConnection('mydb', false, 'no-encryption', 1);
    await db.open();

    await db.run(`INSERT INTO users (name, age) VALUES (?, ?)`, [name, age]);
    console.log('User inserted');

    await sqlite.closeConnection('mydb');
  } catch (err) {
    console.error('Error inserting user:', err);
  }
};

export const getUsers = async () => {
  try {
    const db = await sqlite.createConnection('mydb', false, 'no-encryption', 1);
    await db.open();

    const result = await db.query(`SELECT * FROM users`);
    await sqlite.closeConnection('mydb');
    return result.values;
  } catch (err) {
    console.error('Error fetching users:', err);
    return [];
  }
};
