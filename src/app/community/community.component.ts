import { UserService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {

  }

  
}
