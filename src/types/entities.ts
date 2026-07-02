export interface BaseEntity {
    created_at: Date;
}

export interface UserEntity extends BaseEntity {
    id: number;
    username: string;
    password: string;
}

export interface SessionEntity extends BaseEntity {
    id: number;
    user_id: number;
}