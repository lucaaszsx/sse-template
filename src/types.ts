export interface BaseEntity {
    createdAt: Date;
}

export interface UserEntity extends BaseEntity {
    id: string;
    username: string;
    password: string;
}