import { mkdirSync } from 'node:fs';
import Database from 'better-sqlite3';
import path from 'node:path';

const DATABASE_FILEPATH = path.resolve(import.meta.dirname, '..', 'database', 'sse.db');
mkdirSync(path.dirname(DATABASE_FILEPATH), { recursive: true });

export const db = new Database(DATABASE_FILEPATH);

// Turn on foreign keys
db.pragma('foreign_keys = ON');

// Creates the "user" table
db.exec(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_DATE
    )
`);

// Creates the "session" table
db.exec(`
    CREATE TABLE IF NOT EXISTS session (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        created_at TEXT DEFAULT CURRENT_DATE,
        FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
    )
`)

// Creates the "notification" table
db.exec(`
    CREATE TABLE IF NOT EXISTS notification (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        is_global INTEGER DEFAULT 0,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        created_at TEXT DEFAULT CURRENT_DATE
    )
`);
