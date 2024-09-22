import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private authService:AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup ({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])

    })
    
  }

  

  onSubmit(){
        // console.log (this.form.value)

        let user = this.authService.login(
          this.form.value.username,
          this.form.value.password
        );

        if (!user){
          alert ('Invalid username or password!')
        }else {
          this.router.navigateByUrl('/users');
        }

      }

}
