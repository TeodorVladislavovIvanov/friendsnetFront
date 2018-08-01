import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { FriendsComponent } from './users/friends/friends.component';
import { PostComponent } from './posts/post/post.component';
import { UserComponent } from './users/user/user.component';
import { EventComponent } from './events/event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './posts/shared/post.service';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
    { path: '', component: PostsComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    UsersComponent,
    PostsComponent,
    FriendsComponent,
    PostComponent,
    UserComponent,
    EventComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
