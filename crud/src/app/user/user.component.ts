import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';

import { UserService } from './service/user.service';
import { Comment } from './model/Comment';
import { User } from './model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  comments: Comment[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadComments();
    console.log('data loaded..');
  }

  //users = [{ "email": "abc.com" }, { "email": "bbb@bbc.com" }];
  // users = UserService.prototype.getUser();

  loadComments() {

    this.userService.getComments()
      .subscribe(data => this.comments = data);
     console.log("data :: " +this.comments) ;

  }


}
