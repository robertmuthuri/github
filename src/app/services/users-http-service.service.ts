import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {RepoClass} from '../repo-class';
import {HttpClient} from '@angular/common/http';
import { UserClass } from '../user-class';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpServiceService {
  user: UserClass;

  constructor(private http: HttpClient) {

    this.user = new UserClass(0, '', '');

  }
  searchUsers(searchTerm: string) {

    console.log(searchTerm);

    interface ApiResponse {
      id: number;
      login: string;
      avatar_url: string;
    }

    let searchPoint = 'https://api.github.com/users/' + searchTerm + '?access_token=' + environment.RepoAPIKey;
    console.log(searchPoint);

    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {

          console.log(results);
          this.user = results;
          console.log(this.user);
          // this.user.id = results.id;
          // console.log(this.user.id);
          // this.user.name = results.login;
          // console.log(this.user.name);
          // this.user.repoURL = results.avatar_url;
          // console.log(this.user.repoURL);

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
