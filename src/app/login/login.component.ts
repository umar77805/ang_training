import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() submitted = new EventEmitter<Date>();

  constructor(private loginService: LoginService) {}

  enteredEmail = '';
  enteredPassword = '';
  loginTime = new Date();

  onFormSubmit = () => {
    const isUserAuthenticated = this.loginService.login({email: this.enteredEmail, password: this.enteredPassword});

    if (isUserAuthenticated) {
      this.submitted.emit(new Date());
    }
  };
}
