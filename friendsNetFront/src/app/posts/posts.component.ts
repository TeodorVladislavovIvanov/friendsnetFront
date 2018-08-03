import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.model';
import { PostService } from './shared/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myPosts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostList()
      .subscribe((data: Post[]) => this.myPosts = data,
        error => console.error(error),
        () => console.log('Posts Loaded!')
      );
      
  }

  addPost(post: Post) {
    this.myPosts.push(post);
  }

  deletePost(post: Post) {
    this.myPosts.splice(this.myPosts.indexOf(post), 1);
  }

}
