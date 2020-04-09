import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './componentes/post-form/post-form.component';
import { PostListComponent } from './componentes/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PostesService } from './componentes/services/postes.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostFormComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
