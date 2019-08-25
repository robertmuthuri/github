// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
// import { RepoClass } from '../repo-class';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RepoHttpServiceService {
//
//   repos: RepoClass[] = [];
//
//   constructor(private http: HttpClient) { }
//
//   // searchRepos(searchTerm: string) {
//   searchRepos() {
//     // console.log(searchTerm);
//
//     let searchPoint = 'https://api.github.com/users/robertmuthuri/repos?access_token=' + environment.RepoAPIKey;
//
//     searchPoint += '&q'; // + searchTerm;
//
//     let promise = new Promise((resolve, reject) => {
//       this.http.get(searchPoint).toPromise().then(
//         (results) => {
//
//           console.log(results);
//
//           this.repos = [];
//
//           for (let i = 0; i < results['owner'].length; i++) {
//             let url = results['owner'][i]['avatar_url'];
//             // let repo = new RepoClass(url);
//             let repo = new RepoClass();
//             this.repos.push(repo);
//           }
//           console.log(this.repos);
//           resolve();
//         },
//         (error) => {
//           console.log(error);
//           reject();
//         }
//       );
//     });
//     return promise;
//
//   }
// }
