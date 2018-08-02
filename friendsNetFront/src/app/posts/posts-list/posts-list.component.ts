import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() myPosts: Post[];
  @Output() delete = new EventEmitter<Post>();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  deletePost(post:Post) {
    this.postService.deletePost(post.id)
      .subscribe();
    this.delete.emit(post);

  }
}