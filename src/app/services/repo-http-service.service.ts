import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoHttpServiceService {

  constructor() { }

  searchRepos(searchTerm: string) {
    console.log(searchTerm);
  }
}
