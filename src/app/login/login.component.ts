import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formInputData = [
    {
      title: "Email",
      identifier: "email",
    },
    {
      title: "Password",
      identifier: "password",
    },
  ]
  onFormSubmit = () => {
    alert('Clicked');
  };
}
