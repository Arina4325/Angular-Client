import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  @Input ('user') user;
  @Input ('updateUser') updateUser;
  @Input ('deleteUser') deleteUser;
  @Input ('addUser') addUser;
  txtButton;

  
  form = new FormGroup ({
    // 'id': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'firstname': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]),
    'lastName': new FormControl(null, Validators.required),
    'role': new FormControl(null, Validators.required),
    'age': new FormControl(null, Validators.required),
    'ID': new FormControl(null, Validators.required),
    
  });

  constructor(private userService:UserService){

    }


  ngOnInit(): void {
    
  }

  
getData(){
  if(this.user != undefined &&  this.updateUser == true){
    console.log(this.user.firstname)
    this.form.patchValue({
      firstname: this.user.firstname,
      lastName: this.user.lastName,
      role: this.user.role,
      age: this.user.age,
      ID: this.user.ID,
    });

    this.txtButton= 'Update User';
    
  }
  else if(this.user != undefined && this.deleteUser == true) {
    this.form.patchValue({
      firstname: this.user.firstname,
      lastName: this.user.lastName,
      role: this.user.role,
      age: this.user.age,
      ID: this.user.ID,
    });

    this.txtButton= 'Delete User';

  } else {
    this.txtButton= 'Add User';

  }
 
    
  
}

onSubmit(){

}

ngOnChanges(changes: SimpleChanges) {
        
this.getData();

  
}

save(){
  if(this.updateUser==true){
    this.userService.updateUser(this.form.value);
  } else if (this.deleteUser==true ) {
    this.userService.deleteUser(this.form.value);
  } else if (this.addUser==true ){
    this.userService.addUser(this.form.value);
  } 
  
}
}
 
