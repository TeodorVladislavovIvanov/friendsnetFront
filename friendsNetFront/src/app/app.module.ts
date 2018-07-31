import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { FriendsComponent } from './users/friends/friends.component';
import { PostComponent } from './posts/post/post.component';
import { UserComponent } from './users/user/user.component';
import { EventComponent } from './events/event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    UsersComponent,
    PostsComponent,
    FriendsComponent,
    PostComponent,
    UserComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
