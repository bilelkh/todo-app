import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './componentes/post-list/post-list.component'
import { HomeComponent } from './home/home.component'
const routes: Routes = [
     { path: '', redirectTo: '/post-list', pathMatch: 'full' },
     {
          path: 'post-list',
          component: PostListComponent
     },
     {
          path: 'home',
          component: HomeComponent
     },

];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }