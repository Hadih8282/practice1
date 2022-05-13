import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string ="";
  password: string = "";
  rytypePassword: string ='';
  isPasswordsmatch: boolean = false;

  public onUsernameInputChange(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }

  public onPasswordInputChange(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  public onRytypePasswordChange(e: Event) {
    this.rytypePassword = (<HTMLInputElement>e.target).value;

    // if ( this.password !== this.rytypePassword) {
    //   this.isPasswordsmatch = false;
    // } else{
    //   this.isPasswordsmatch = true;
    // }


    this.isPasswordsmatch = this.password !== this.rytypePassword ? false : true;

  }



}
