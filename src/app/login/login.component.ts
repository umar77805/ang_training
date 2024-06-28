import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, NgFor, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() submitted = new EventEmitter<void>();
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
    this.submitted.emit();
  };
}
