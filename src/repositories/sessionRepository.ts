import type { SessionEntity } from "../types/entities.js";
import { db } from "../database.js";

class SessionRepository {
    public create(userId: number) {
        const stmt = db.prepare('INSERT INTO session(user_id) VALUES (?)');
        const result = stmt.run(userId);

        return this.getById(result.lastInsertRowid as number);
    }

    public getById(id: number) {
        const stmt = db.prepare('SELECT * FROM session WHERE id = ?');
        return (stmt.get(id) as SessionEntity) ?? null;
    }

    public delete(id: number) {
        const stmt = db.prepare('DELETE FROM session WHERE id = ?');
        const result = stmt.run(id);

        return result.changes > 0;
    }
}

export const sessionRepository = new SessionRepository();