import { Component, OnInit } from '@angular/core';
import { PostesService } from '../services/postes.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public postesService: PostesService) {
    console.log('===constructor ===')
  }

  ngOnInit() {
    this.getPostes()

  }

  getPostes() {

  }

  addPost() {
    this.getPostes();
  }





}
