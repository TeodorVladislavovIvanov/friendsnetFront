import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "./post.model";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class PostService{
    URL_BASE: string = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) {}

    getPostList(): Observable<Post[]> {
        return this.http.get<Post []>(this.URL_BASE);
    };

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.URL_BASE, post, httpOptions);
    }

    deletePost(id: number): Observable<{}> {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.delete(url, httpOptions);
    }
}