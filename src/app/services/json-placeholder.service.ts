import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';

const jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(jsonUrl);
  }

}

