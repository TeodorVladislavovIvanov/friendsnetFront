import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFriendsComponent } from './posts-friends.component';

describe('PostsFriendsComponent', () => {
  let component: PostsFriendsComponent;
  let fixture: ComponentFixture<PostsFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
