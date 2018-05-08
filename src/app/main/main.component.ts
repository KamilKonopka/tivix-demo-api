import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
