import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name;
  email;
  password;
  password_confirm;
  constructor() { }

  ngOnInit() {
  }
  register(){
    console.log(this.name,this.email,this.password,this.password_confirm);
  }
}
