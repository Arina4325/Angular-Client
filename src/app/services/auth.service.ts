import { Injectable } from "@angular/core";
import { User } from "../models/interfaces";
import { Router } from "@angular/router";



@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

  userList: User[] = [
    {
      username: 'arina',
      password: 'arina'
    },
    {
        username: '12345',
        password: '12345'
      },
    ]

session: any;

constructor(private router: Router) { 
  let session:any = localStorage.getItem('session');
  if (session){
    session = JSON.parse(session);
  }

  this.session = session;
}

    login(username: string, password: string){
        let user = this.userList.find((u)=> u.username===username && u.password===password);
        if(user){
            this.session = user;
            localStorage.setItem ('session', JSON.stringify(this.session))
        }
        return user;
    }

    logout(){
      this.session=undefined;
      localStorage.removeItem('session');
      this.router.navigateByUrl('/');
    }


  }
  