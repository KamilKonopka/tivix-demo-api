import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  @ViewChild('userId')
  userId: NgForm;

  jsonPostsByUser;
  form = new FormData();


  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  getPostByUser() {
    this.jsonPlaceholderService.getPostByUser(this.form.UserId).subscribe(posts => {
      this.jsonPostsByUser = posts;
      this.userId.reset();
    });
  }

  ngOnInit() {
  }


}
class FormData {
  constructor(public UserId?: number) {}
}
