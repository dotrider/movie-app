import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { LogInData } from '../../../authData';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isUserInfoInvalid: boolean = false;
  isLoginValid: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onLogin(signIn: NgForm): void {
    // console.log('onLogin', signIn)
    if(!signIn.valid){
      this.isLoginValid = true;
      this.isUserInfoInvalid = false;
    }
    this.verifyUserInfo(signIn);
  }

  private verifyUserInfo(signIn: NgForm): void {
    const logInData = new LogInData(signIn.value.username, signIn.value.password);
    if (!this.authService.authenticate(logInData)) {
      this.isLoginValid = false;
      this.isUserInfoInvalid = true;
    }
  }


}
