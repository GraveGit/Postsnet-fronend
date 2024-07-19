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
        "/messages",
        {}
      ).then(
        (response) => this.data = response.data
      )
    }

}
