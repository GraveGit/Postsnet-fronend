import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MainwindowComponent } from '../mainwindow/mainwindow.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { UserService } from '../services/user-service.service';
import { BootstrapOptions } from '@angular/core';
import { response } from 'express';
import { routes } from '../app.routes';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MainwindowComponent,
    LoginPageComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {


  constructor(private userService: UserService, private router: Router) {}

  onLogin(input: any): void {
    this.userService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password

      }
    ).then(response => {
        this.userService.setAuthToken(response.data.token);
        this.router.navigate(["/community"])
    });

  }

  onRegister(input: any): void {

    this.userService.request(
      "POST",
      "/register",
      {
        email: input.email,
        login: input.login,
        password: input.password

      }
    ).then(response => {
      this.userService.setAuthToken(response.data.token);
      this.router.navigate(["/community"])
  });

  }

}
