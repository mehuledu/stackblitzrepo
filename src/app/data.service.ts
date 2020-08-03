import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  // https://jsonplaceholder.typicode.com/
  // /posts	100 posts
  // /comments	500 comments
  // /albums	100 albums
  // /photos	5000 photos
  // /todos	200 todos
  // /users	10 users
  api = "https://jsonplaceholder.typicode.com";

  getPosts(): Observable<any> {
    return this.http.get(`${this.api}/posts`);
  }

  getComments(): Observable<any> {
    return this.http.get(`${this.api}/comments`);
  }

  getAlbums(): Observable<any> {
    return this.http.get(`${this.api}/albums`);
  }

  getPhotos(): Observable<any> {
    return this.http.get(`${this.api}/photos`);
  }

  getTodos(): Observable<any> {
    return this.http.get(`${this.api}/todos`);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.api}/users`);
  }

  get(item: string): Observable<any> {
    return this.http.get(`${this.api}/${item}`);
  }
}
