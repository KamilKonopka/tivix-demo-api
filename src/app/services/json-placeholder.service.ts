import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/users';

const jsonUrl = 'https://jsonplaceholder.typicode.com/';

@Injectable()
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(jsonUrl + 'posts');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(jsonUrl + 'posts/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>(jsonUrl + 'posts/', {params: param});
  }

  getUser(id: number): Observable<User> {
    const param = new HttpParams().set('id', id + '');
    return this.http.get<User>(jsonUrl + 'users/' + id);
  }

}

