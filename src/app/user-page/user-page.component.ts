import { UserService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/models.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent{

  user: User | null = null;

  constructor(private userService: UserService, private router: Router) {}



}
