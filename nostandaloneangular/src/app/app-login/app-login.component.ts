import { Component } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent {
  isLogin:boolean = true;
  login(){
    alert("You are logged in..!")
  }
  forgotPassword(){
    alert("your new password has been mailed to you")
  }
  toggleLogin() {
    this.isLogin = !this.isLogin;
  }
}
