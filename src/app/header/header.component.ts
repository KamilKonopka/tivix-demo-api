import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slide: Post;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  getPost() {
    this.jsonPlaceholderService.getPost(1).subscribe(post => {
      this.slide = post;
    });
  }

  ngOnInit() {
    this.getPost();
  }

}
