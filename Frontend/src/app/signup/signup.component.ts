import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    password: '',
    mobile: '',
    email: '',
  };
  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}
  signupuser() {
    this._auth.signupUser(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        this._router.navigate(['/']);
      }
    );
  }
}
