import { Component, OnInit } from '@angular/core';
import { RepoHttpServiceService } from '../services/repo-http-service.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor(public repoHttpServiceService: RepoHttpServiceService) { }

  ngOnInit() {
  }

  // searchRepo(searchTerm) {
  //   console.log(searchTerm);
  //   this.repoHttpServiceService.searchRepos(searchTerm);
  // }

}
