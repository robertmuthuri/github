import { Component, OnInit } from '@angular/core';
// import { RepoHttpServiceService } from '../services/repo-http-service.service';
import {UsersHttpServiceService} from '../services/users-http-service.service';
import {UserClass} from '../user-class';
import {RepoClass} from '../repo-class';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  users: UserClass;
  repos: RepoClass;

  constructor(public userHttpService: UsersHttpServiceService) { }


  searchUser(searchTerm) {

    this.userHttpService.searchUsers(searchTerm).then(
      (success) => {
        this.users = this.userHttpService.user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRepos(searchTerm) {
    this.userHttpService.getRepos(searchTerm).then(
      () => {
        this.repos = this.userHttpService.repos;
    },
    (error) => {
        console.log(error);
    }
    )
  }

  ngOnInit() { this.searchUser( 'robertmuthuri'); }

}
