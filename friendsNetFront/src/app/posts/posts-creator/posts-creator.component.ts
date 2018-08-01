import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { User } from '../../users/shared/user.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts-creator',
  templateUrl: './posts-creator.component.html',
  styleUrls: ['./posts-creator.component.css']
})
export class PostsCreatorComponent implements OnInit {

  myPosts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(text: string) {
    const post: Post = new Post();
    const person: User = new User();
    person.id = 1;
    person.name = "Teodor";
    person.surname = "Ivanov";
    post.person = person;
    post.creationDate = new Date;
    post.text = text;
    this.postService.addPost(post)
      .subscribe(post => this.myPosts.push(post));
  }

}
