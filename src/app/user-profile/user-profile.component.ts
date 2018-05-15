import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  User: User;
  id = 9;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id: number): void {
    this.jsonPlaceholderService.getUser(id).subscribe(user => {
      this.User = user;
    });

  }

}
