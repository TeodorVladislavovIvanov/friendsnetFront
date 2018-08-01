import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  myPosts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostList()
      .subscribe((data: Post[]) => this.myPosts = data,
        error => console.error(error),
        () => console.log('Posts Loaded!')
      );
  }

  totalPosts() {
    return this.myPosts.length;
  }
}