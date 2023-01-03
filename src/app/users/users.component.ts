import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent {
  userData: object = {};
  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getData().subscribe(data => {
      console.log(typeof data);
      this.userData = data;
      // this.userData = JSON.stringify(data);
      console.log(this.userData);
    })
  }

}
