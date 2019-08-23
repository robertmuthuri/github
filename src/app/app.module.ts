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
import { RepoClassComponent } from './repo-class/repo-class.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    RepoNavbarComponent,
    NotFoundComponent,
    RepoSearchComponent,
    RepoClassComponent
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
