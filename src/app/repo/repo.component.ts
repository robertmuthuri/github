import { Component, OnInit } from '@angular/core';
// import { RepoHttpServiceService } from '../services/repo-http-service.service';
import {UsersHttpServiceService} from '../services/users-http-service.service';
import {UserClass} from '../user-class';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  users: UserClass;

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

  ngOnInit() { this.searchUser( 'robertmuthuri'); }

}
