import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    const dummyEmail = 'admin@gmail.com';
    const dummyPassword = '1234';

    if (this.email === dummyEmail && this.password === dummyPassword) {
      // console.log('Login successful');
      this.router.navigate(['/']);
    } else {
      console.log('Invalid email or password');
    }
  }
}
