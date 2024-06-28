import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  isSubmitted = false;

  handleSubmit = () => {
    this.isSubmitted = true;
  }

  handleSubmitTextClick = () => {
    this.isSubmitted = false;
  }
}
