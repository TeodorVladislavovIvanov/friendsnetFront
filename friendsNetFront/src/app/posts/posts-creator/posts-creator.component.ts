import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';
import { User } from '../../users/shared/user.model';
import { PostService } from '../shared/post.service';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-posts-creator',
  templateUrl: './posts-creator.component.html',
  styleUrls: ['./posts-creator.component.css']
})
export class PostsCreatorComponent implements OnInit {

  @Output() postEmiter = new  EventEmitter<Post>();

  myPosts: Post[] = [];
  user: User;
  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(1).subscribe(userAux => this.user = userAux);
  }

  addPost(text: string) {
    const post: Post = new Post();
    post.creationDate = new Date;
    post.text = text;
    post.user = this.user;
    this.postService.addPost(post)
      .subscribe((data: Post) => this.postEmiter.emit(data));
  }

} 
