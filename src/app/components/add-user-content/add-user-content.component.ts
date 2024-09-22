import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-add-user-content',
  templateUrl: './add-user-content.component.html',
  styleUrls: ['./add-user-content.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule],
})
export class AddUserContent implements OnInit{

  form: FormGroup;
  users:any[]=[];
  
  constructor(private router: Router, private http: HttpClient, private userService: UserService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup ({
      'id': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'firstname': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]),
      'lastname': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'role': new FormControl('Guest')
    });

  
       
  }

  onSubmit(){
     console.log (this.form.value)
    //  this.userService.addUser()

  }

}


