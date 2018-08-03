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
  friendShow: FriendsCustom = new FriendsCustom();
  users: User[] = [];
  usersToshow: FriendsCustom[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1).subscribe(userAux => this.user = userAux);

    this.userService.getUserList()
      .subscribe((data: User[]) => {
        this.users = data;
        this.showFriends();
      },
        error => console.error(error),
        () => console.log('users Loaded!')
      );

  }

  showFriends() {
    for (let i = 0; i < this.users.length; i++) {
      let es: boolean = false;
      for (let x = 0; x < this.users[0].friends.length; x++) {
        if (this.users[i].id === this.users[0].friends[x].id) {
          let p: FriendsCustom = new FriendsCustom();
          p.isFriend = true;
          p.friend = this.users[0].friends[x];

          this.usersToshow.push(p);

          es = true;
        }
      }
      if (es != true) {
        let p: FriendsCustom = new FriendsCustom();
        p.isFriend = false;
        p.friend = this.users[i];
        if (p.friend.id != 1) {
          this.usersToshow.push(p);
        }
      }
    }
  }
}
