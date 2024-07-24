import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MainwindowComponent } from '../mainwindow/mainwindow.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { UserService } from '../services/user-service.service';
import { BootstrapOptions } from '@angular/core';
import { response } from 'express';
import { routes } from '../app.routes';
import { ButtonsComponent } from '../buttons/buttons.component';
import { WelcomeContentComponent } from '../welcome-content/welcome-content.component';
import { NgIf } from '@angular/common';
import { AuthPageComponent } from "../auth-page/auth-page.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MainwindowComponent,
    LoginPageComponent,
    ButtonsComponent,
    WelcomeContentComponent,
    NgIf,
    AuthPageComponent
],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string = "login";

  constructor(private userService: UserService, private router: Router) {}

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

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
        this.componentToShow = "communities";
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
      this.componentToShow = "messages";
  });

  }

}
