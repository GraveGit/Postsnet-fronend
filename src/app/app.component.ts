import { Component, BootstrapOptions } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NgFor, NgForOf } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { CommunityComponent } from './community/community.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserPageComponent,
    LoginPageComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    AuthPageComponent,
    NgFor,
    NgForOf,
    ContentComponent,
    MainwindowComponent,
    CommunityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'postsnet-frontend';

  constructor(private router: Router) {}

  ngOnInit() {
      this.router.navigate(['/content']);
    }

}

