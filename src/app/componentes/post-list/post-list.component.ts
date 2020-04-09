import { Component, OnInit } from '@angular/core';
import { PostesService } from '../services/postes.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postes: any[] = [];
  constructor(public postesService: PostesService) {
    console.log('===constructor ===')
  }

  ngOnInit() {
    this.getPostes();
  }

  getPostes() {

    // console.log("===getPostes===")
    // this.postesService.getPostes().subscribe(data => {
    //   console.log("===datat===", data);
    // }, error => {
    //   console.error("===error===", error);
    // })

    this.postesService.getPostes().toPromise().then((data:any) => {
      this.postes = data;
      console.log("===data===", data);
    }).catch(error => {
      console.log("==error==", error);
    })


  }

  addPost() {
    this.getPostes();
  }





}
