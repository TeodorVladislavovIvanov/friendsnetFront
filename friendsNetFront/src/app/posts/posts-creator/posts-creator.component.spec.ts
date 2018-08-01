import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCreatorComponent } from './posts-creator.component';

describe('PostsCreatorComponent', () => {
  let component: PostsCreatorComponent;
  let fixture: ComponentFixture<PostsCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
