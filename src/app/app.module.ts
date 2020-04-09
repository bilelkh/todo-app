import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './componentes/post-form/post-form.component';
import { PostListComponent } from './componentes/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PostesService } from './componentes/services/postes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostFormComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
