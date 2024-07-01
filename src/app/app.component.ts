import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [LoginComponent, NgIf, HomeComponent]
})
export class App {
  isLoggedIn = false;
  loginTime = new Date();

  onLogin = (time: Date) => {
    this.isLoggedIn = true;
    this.loginTime = time;
  }
}
