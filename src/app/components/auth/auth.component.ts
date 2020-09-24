import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isUserInfoInvalid: boolean = false;
  isLoginValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onLogin(login: NgForm): void {
    if(!login.valid){
      this.isLoginValid = true;
      this.isUserInfoInvalid = false;
    }
    this.verifyUserInfo(login);
  }

  private verifyUserInfo(login: NgForm): void {
    const logInInfo = new LogInInfo(login.value.login, login.value.password);
    if (!this.authenticationService.authenticate(logInInfo)) {
      this.isLoginValid = false;
      this.isUserInfoInvalid = true;
    }
  }
  }

}
