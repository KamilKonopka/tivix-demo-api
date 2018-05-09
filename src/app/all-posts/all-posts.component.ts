import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  jsonPosts;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }
  getPosts() {
    this.jsonPlaceholderService.getPosts().subscribe(posts => {
      this.jsonPosts = posts;
    });
  }

  ngOnInit() {
    this.getPosts();
  }

}
