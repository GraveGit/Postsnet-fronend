import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { ContentComponent } from './content/content.component';
import { CommunityComponent } from './community/community.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'user', component: UserPageComponent },
  { path : 'community', component: CommunityComponent },
  { path : 'content', component: ContentComponent}
];
