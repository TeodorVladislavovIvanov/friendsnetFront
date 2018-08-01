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

    URL_BASE: string = 'http://localhost:3000/persons';

    constructor(private http: HttpClient) {}

    getPostList(): Observable<User[]> {
        return this.http.get<User []>(this.URL_BASE);
    };
}