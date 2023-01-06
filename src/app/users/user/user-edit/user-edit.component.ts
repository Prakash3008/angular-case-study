import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../../users.model';
import { UserService } from '../../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

  id: number;
  editMode = false;
  user: Users;
  userForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router){}
  ngOnInit(){
    this.route.params.
    subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.formInit();
    })
  }

  private formInit(){
    let firstName: String = '';
    let lastName: String = '';
    let email: String = '';
    let avatar: String = '';
    let insuredAmount: number = 0;
    let companyName: String = '';
    let userLocation: String = '';
    console.log(this.editMode);

    if(this.editMode){
      
      this.userService.getUser(this.id).subscribe(user => {
        this.userForm.setValue({
          firstName: user['firstName'],
          lastName: user['lastName'],
          email: user['email'],
          avatar: user['avatar'],
          insuredAmount: user['insuredAmount'],
          companyName: user['companyName'],
          userLocation: user['userLocation']
        })
        this.userForm.get('email').disable();
        this.userForm.get('insuredAmount').disable();
        this.userForm.get('companyName').disable();
        this.userForm.get('userLocation').disable();
      })
      
    }

    this.userForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'email': new FormControl(email, Validators.required),
      'avatar': new FormControl(avatar, Validators.required),
      'insuredAmount': new FormControl(insuredAmount, Validators.required),
      'companyName': new FormControl(companyName, Validators.required),
      'userLocation': new FormControl(userLocation, Validators.required)
    });

  }
  onSubmit(){
    console.log(this.userForm.value, typeof this.userForm.value);
    if(!this.editMode){
      this.userService.addUser(this.userForm.value).subscribe(result=>{
        this.userService.getUsers();
        alert("User added successfully");
        console.log(result);
      })
    }else{
      this.userService.updateUser(this.id, this.userForm.value).subscribe(result=>{
        this.userService.getUsers();
        console.log(result);
        alert("User updated successfully");
      })
    }
    this.router.navigate(['/users']);

  }

}
