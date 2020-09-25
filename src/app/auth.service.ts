import { Injectable } from '@angular/core';
import { LogInData } from 'src/authData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  //Keeping user local for mocking purposes
  private readonly testUser: LogInData = new LogInData('test', '123')
  isLogIn: boolean = false;


  constructor(private router: Router) { }

  authenticate(logInData: LogInData): boolean {
    // console.log('authenticate', logInData)
    if(this.checkUserInfo(logInData)){
      this.isLogIn = true;
      this.router.navigate(['dashboard']);
      return true
    }
      this.isLogIn = false
      return false
  }

  private checkUserInfo(logInData: LogInData): boolean {
    // console.log('checkUserInfo', logInData)
    return this.checkUsername(logInData.getUsername()) && this.checkPassword(logInData.getPassword());
  }

  private checkUsername(username: string): boolean {
    // console.log('checkUsername', username)
    return username === this.testUser.getUsername();
  }

  private checkPassword(password: string): boolean {
    // console.log('checkPassword', password)
    return password === this.testUser.getPassword()
  }

  logout() {
    this.isLogIn = false;
    this.router.navigate(['']);
  }
}
