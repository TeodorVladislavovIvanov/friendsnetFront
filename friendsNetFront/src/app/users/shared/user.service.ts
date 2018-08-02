import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "./user.model";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class UserService {
    users: User[] = [];

    URL_BASE: string = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    getUserList(): Observable<User[]> {
        return this.http.get<User []>(this.URL_BASE);
    };

    getUserById(id: number): Observable<User> {
        const url = `${this.URL_BASE}/${id}`;

        return this.http.get<User>(url, httpOptions);
    }

    addUser(user: User): Observable<User> {
        const url = `${this.URL_BASE}/${user.id}`;

        return this.http.put<User>(url, user, httpOptions);
    }
}