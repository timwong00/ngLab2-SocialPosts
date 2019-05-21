import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Posts[];
  @Output() onRemovePost = new EventEmitter<any>();

  constructor() { }

  like: number = 0;

  removePost() {
    this.onRemovePost.emit();
  }

  likeVote(): void {
    this.like++;
  }

  ngOnInit() {
  }

}
