import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { RepoNavbarComponent } from './repo-navbar/repo-navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    RepoNavbarComponent,
    NotFoundComponent,
    RepoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
