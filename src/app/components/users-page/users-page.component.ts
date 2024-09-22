import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
  
})
export class UsersPageComponent implements OnInit{

user;

updateUser:boolean;
deleteUser:boolean;
addUser:boolean;

show: boolean = false;

userListNew: any[];
  
 userSearch = '';
 userListFiltered: any;
 usersChk:any=null;
 myForm = new FormGroup ({
   txt: new FormControl (""),
 });

 
 get txt(){
   return this.myForm.get('txt');
 }

 get userList(){
  return this.userService.userList;
}

  constructor(private authService: AuthService, private userService:UserService, private dataService: DataService){
    this.userService.userList = this.userService.userList;
    this.getJsonFromLocal();

    }

  getJsonFromLocal(){

    this.dataService.apiJsonLocalGet('/assets/json/users.json').subscribe(data => {
    let users:any=data;
    this.userService.userList=users.users;
    this.userListNew=users.users;

    });
  }

    ngOnInit(): void {
      this.myForm.get('txt')!.valueChanges.subscribe((data)=>{
      this.search();

      });

      this.userService.closePopup$.subscribe(data=>{
        if (data>0){
          this.show=false;
        }

      });
      // this.userService.userListChanged.subscribe(
      //   (users)=>{
      //     this.users = users;
      //   }
      // );
    }
    

  logout(){
    this.authService.logout();

  }

  search(){
    this.userListNew = JSON.parse(JSON.stringify(this.userService.userList));
     
    if(this.txt!.value != null && !Number(this.txt!.value) )
    this.userListNew =this.userList.filter(x => x.ID.indexOf(this.txt!.value)>-1 || x.firstname.indexOf(this.txt!.value )>-1 || x.lastName.indexOf(this.txt!.value )>-1)
   
   
    if(this.txt!.value && Number(this.txt!.value) )
      this.userListNew =this.userList.filter(x => x.age == this.txt!.value || x.ID.indexOf(this.txt!.value)>-1)
  }


  onEdit(item:any){
    if(item){
      this.show = true;
      this.user = item;
      this.deleteUser = false;
      this.updateUser = true;
      this.addUser = false;
    }
    else {
      this.show = true;
      this.user = null;
      this.updateUser = false;
      this.addUser = true;
      this.deleteUser = true;
      
    }
    
  }

  onDelete(item:any){
    if(item){
      this.show = true;
      this.user = item;
      this.deleteUser = true;
      this.updateUser = false;
      this.addUser = false;
    }
    else {
      this.show = true;
      this.user = null;
      this.deleteUser = false;
      this.addUser = true;
      this.updateUser = true;
    }
    
  }

  onAdd(item: any){
    if(item){
      this.show = true;
      this.user = null;
      this.deleteUser = false;
      this.updateUser = false;
      this.addUser = true;
    }
    else {
      this.show = true;
      this.user = item;
      this.updateUser = true;
      this.deleteUser = true;
      this.addUser = false;
      
    }
  }

}
