import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './welcome-content.component.html',
  styleUrl: './welcome-content.component.css'
})
export class WelcomeContentComponent {

}
