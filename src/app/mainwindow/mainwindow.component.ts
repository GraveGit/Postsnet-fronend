import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainwindow',
  standalone: true,
  imports: [],
  templateUrl: './mainwindow.component.html',
  styleUrl: './mainwindow.component.css'
})
export class MainwindowComponent {

  constructor(private router: Router) {}

}
