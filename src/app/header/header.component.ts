import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string = '';

  ngOnInit(){
    this.username = localStorage.getItem('username');
  }

  changeUserName(){
    this.username = prompt("Enter your username")
    localStorage.setItem('username', this.username);
  }

}
