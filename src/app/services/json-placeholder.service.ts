import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';

const jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(jsonUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(jsonUrl + '/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>(jsonUrl, {params: param});
  }

}

