import { Component, OnInit } from '@angular/core';
import { PostesService } from '../services/postes.service';
import { Poste } from '../models/poste';
import { Router } from '@angular/router'


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postes: Poste[] = [];
  constructor(public router: Router, public postesService: PostesService) {
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

    this.postesService.getPostes().toPromise().then((data: Poste[]) => {
      this.postes = data;
      console.log("===data===", data);
    }).catch(error => {
      console.log("==error==", error);
    })


  }

  addPost() {
    this.getPostes();
  }




  onDelete(id: number) {
    this.postes = this.postes.filter(poste => poste.id !== id)
  }

  navigateToForm(id: number) {
    this.router.navigate(['post-form']);
  }
}
