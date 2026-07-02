import type { UserEntity } from '../types/entities.js';
import { db } from '../database.js';

class UserRepository {
    public create(username: string, password: string) {
        const stmt = db.prepare('INSERT INTO user(username, password) VALUES (?, ?)');
        const result = stmt.run(username, password);

        return this.getById(result.lastInsertRowid as number);
    }

    public getById(id: number) {
        const stmt = db.prepare('SELECT * FROM user WHERE id = ?');
        return (stmt.get(id) as UserEntity) ?? null;
    }

    public getByUsername(username: string) {
        const stmt = db.prepare('SELECT * FROM user WHERE username = ?');
        return (stmt.get(username) as UserEntity) ?? null;
    }

    public update(id: number, username: string) {
        const stmt = db.prepare('UPDATE user SET WHERE id = ? SET username = ?');
        stmt.run(id, username);

        return this.getById(id);
    }

    public delete(id: number) {
        const stmt = db.prepare('DELETE FROM user WHERE id = ?');
        const result = stmt.run(id);

        return result.changes > 0;
    }
}

export const userRepository = new UserRepository();
