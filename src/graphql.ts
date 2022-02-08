
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUser {
    email: string;
    name?: Nullable<string>;
}

export class User {
    id: number;
    email: string;
    name?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
}

export class Post {
    id: number;
    title: string;
    description?: Nullable<string>;
    url?: Nullable<string>;
}

export abstract class IQuery {
    abstract getUserById(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUser: CreateUser): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
