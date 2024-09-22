import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { SimpleChanges } from '@angular/core';




@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  @Input ('user') user;
  @Input ('deleteUser') deleteUser;
  txtButton;

  form = new FormGroup ({
    'firstname': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]),
    'lastName': new FormControl(null, Validators.required),
    'role': new FormControl(null, Validators.required),
    'age': new FormControl(null, Validators.required),
    'ID': new FormControl(null, Validators.required),
    
  });


  constructor(private userService:UserService){

  }


  getData(){
    if(this.user != undefined){
      console.log(this.user.firstname)
      this.form.patchValue({
        firstname: this.user.firstname,
        lastName: this.user.lastName,
        role: this.user.role,
        age: this.user.age,
        ID: this.user.ID,
      });
  
      this.txtButton= 'Delete User';
      
    }
    else{
      console.log("Cant delete this user")
    }
      
    
  }
  
  onSubmit(){
  
  }
  
  ngOnChanges(changes: SimpleChanges) {
          
  this.getData();
  
    
  }
  
  save(){
    if(this.deleteUser==true){
      this.userService.deleteUser(this.form.value);
    }else
    console.log("Cant delete this user")
  }

}


