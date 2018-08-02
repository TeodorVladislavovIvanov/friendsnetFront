import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { FriendsCustom } from '../shared/FriendsCustom.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  user: User;
  users: User[]=[];
  usersToshow:FriendsCustom;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1).subscribe(userAux => this.user = userAux);

    this.userService.getUserList()
      .subscribe((data: User[]) => this.users = data,
        error => console.error(error),
        () => console.log('users Loaded!')
      );
  }

  showFriends(){
    this.users.forEach(user => {
      
    });

  }



}
