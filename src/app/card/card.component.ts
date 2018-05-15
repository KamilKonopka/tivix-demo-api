import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('post') post: Post;
  constructor() { }

  ngOnInit() {
  }

}
