import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class RepoHttpServiceService {

  constructor(private http: HttpClient) { }

  searchRepos(searchTerm: string) {
    console.log(searchTerm);

    let searchPoint = 'https://api.github.com/users/robertmuthuri?access_token=' + environment.RepoAPIKey;

    searchPoint += searchTerm;

    let promise = new Promise((resolve, reject) => {
      this.http.get(searchPoint).toPromise().then(
        (results) => {
          console.log(results);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;

  }
}
