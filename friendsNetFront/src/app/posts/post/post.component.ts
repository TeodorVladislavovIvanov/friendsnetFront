import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor(private postlistComp: PostsListComponent) { }

  ngOnInit() {
  }

  deletePost(){
    this.postlistComp.deletePost(this.post);
  }
}
