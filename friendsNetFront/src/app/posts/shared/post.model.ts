import { User } from "../../users/shared/user.model";

export class Post {
    id: number;
    text: string;
    creationDate: Date;
    user :User;
}