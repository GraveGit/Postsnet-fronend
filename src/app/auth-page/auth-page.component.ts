import { NgFor, NgForOf } from '@angular/common';
import { UserService } from './../services/user-service.service';
import { Component, BootstrapOptions } from '@angular/core';


@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    NgFor,
    NgForOf
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent{
  data: string[] = [];

  constructor(private userService: UserService) { }

    ngOnInit(): void {

      this.userService.request(
        "GET",
        "api/v1/communities/getcom",
        {}).then(
          (response) => {
              this.data = response.data;
          }).catch(
          (error) => {
              if (error.response.status === 401) {
                  this.userService.setAuthToken(null);
              } else {
                  this.data = error.response.code;
              }

          }
      );
    }
  }
