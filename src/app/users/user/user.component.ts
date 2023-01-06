import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  subscribe: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){};
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }


  ngOnInit(){
    this.subscribe = this.userService.id.subscribe((index:number)=>{
      console.log(index);
      this.userService.getUser(index).subscribe(data =>{
        console.log(data['firstName']);
        this.userData = data;
        console.log(this.userData)
      })
    })
  }

  editUser(){
    this.router.navigate(['edit'], { relativeTo: this.route});

  }
}
