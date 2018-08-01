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
import { PostsFriendsComponent } from './posts/posts-friends/posts-friends.component';
import { PostsCreatorComponent } from './posts/posts-creator/posts-creator.component';
import { UsersListComponent } from './users/users-list/users-list.component';


const routes: Routes = [
    { path: '', component: PostsComponent },
    { path: 'misHistorietas', component: PostsComponent },
    { path: 'misCosas', component: PostsFriendsComponent },
    { path: 'misColegas', component: UsersComponent }
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
    PostsListComponent,
    PostsFriendsComponent,
    PostsCreatorComponent,
    UsersListComponent
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
