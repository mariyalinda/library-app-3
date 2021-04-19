import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = '/login';
  private _signupUrl = '/signup';

  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  signupUser(user: any) {
    return this.http.post<any>(this._signupUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
