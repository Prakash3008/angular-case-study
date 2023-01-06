import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  selectedId: number;
  userData = {};
  isUserSet: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){};


  ngOnInit(){
    this.route.params.subscribe((index:Params)=>{
      this.isUserSet = true;
      console.log(index);
      this.selectedId = +index['id'];
      this.userService.getUser(this.selectedId).subscribe(data =>{
        console.log(data['firstName']);
        this.userData = data;
        console.log(this.userData);

      })
    })
  }

  editUser(){
    this.router.navigate(['edit'], { relativeTo: this.route});

  }

  deleteUser(){
    this.userService.deleteUser(this.selectedId).subscribe(data =>{
      this.userService.getUsers();
      console.log(data);
      alert('User deleted successfully');
    })
    this.router.navigate(['/users']);

  }
}
