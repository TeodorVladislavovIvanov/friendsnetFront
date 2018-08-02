import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts-friends',
  templateUrl: './posts-friends.component.html',
  styleUrls: ['./posts-friends.component.css']
})
export class PostsFriendsComponent implements OnInit {

  myPosts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostList()
      .subscribe((data: Post[]) => this.myPosts = data,
        error => console.error(error),
        () => console.log('Posts Loaded!')
      );
  }

}
