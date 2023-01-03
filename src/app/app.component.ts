import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-case-study';
  userName: string;
  ngOnInit(){
    // this.userName = window.prompt("Enter your Username: ")
    // console.log(this.userName);
    // const user = JSON.parse(localStorage.getItem('username'));
    // if(this.userName == user){
    //   alert("Profile already exists")
    // }
    // localStorage.setItem('username', this.userName);
  }
}
