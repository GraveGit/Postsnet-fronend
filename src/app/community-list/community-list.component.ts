import { NgFor } from '@angular/common';
import { Component, OnInit, Output} from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-community-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './community-list.component.html',
  styleUrl: './community-list.component.css'
})
export class CommunityListComponent implements OnInit {

  communities: any[] = [];


  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.userService.request(
      "GET",
      "/getcom",
      {}).then(
      (response) => {
          this.communities = response.data;
      }).catch(
      (error) => {
          if (error.response.status === 401) {
              this.userService.setAuthToken(null);
          } else {
              this.communities = error.response.code;
          }

      }
  );
}




}
