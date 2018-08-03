import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserById(1).subscribe(userAux => this.user = userAux);
  }

}
