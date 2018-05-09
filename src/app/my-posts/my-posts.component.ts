import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  jsonPostsByUser;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  getPostByUser() {
    this.jsonPlaceholderService.getPostByUser(1).subscribe(posts => {
      this.jsonPostsByUser = posts;
      console.log(posts);
    });
  }


  ngOnInit() {
    this.getPostByUser();
  }

}
