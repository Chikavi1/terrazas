import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  darkMode: boolean =false;
  constructor() { }

  cambio(){
    this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark')
  }
  
  ngOnInit() {
  }

}
