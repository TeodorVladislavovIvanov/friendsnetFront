import { Component } from '@angular/core';
import { User } from './users/shared/user.model';
import { UserService } from './users/shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendsNetFront';

  user: User;

  constructor(private userService: UserService ) {
  }

  ngOnInit() {
    this.userService.getUserById(1)
      .subscribe((data: User) => this.user = data);
  }

}
