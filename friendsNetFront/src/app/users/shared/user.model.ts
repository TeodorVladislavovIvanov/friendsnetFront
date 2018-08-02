import { Friend } from "./friend.model";

export class User {
    id: number;
    name: string;
    surname: string;
    friends: Friend[];
}