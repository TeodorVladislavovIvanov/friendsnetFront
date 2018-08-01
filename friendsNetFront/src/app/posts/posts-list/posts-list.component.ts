import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { User } from '../../users/shared/user.model';

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

  deletePost(id:number) {
    console.log("A tope de pover")
    this.postService.deletePost(id)
      .subscribe(
        data => {
          this.myPosts = this.myPosts.filter(el => { return el.id !== id });
        });

  }
}