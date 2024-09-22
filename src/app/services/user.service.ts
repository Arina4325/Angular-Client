import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
// userListChanged = new EventEmitter<any []>();

userList: any []=[];
counter=0;

//subjects
 closePopup$=new BehaviorSubject<number>(0);


updateUser(item){
let index: number;
index = this.userList.findIndex(x=>x.ID==item.ID);
if (index > -1)
  {
    this.userList.splice(index, 1);
    this.userList.push(item);
    this.counter+=1;
    this.closePopup$.next(this.counter);
  }
}


deleteUser(item){
  let index: number;
  index = this.userList.findIndex(x=>x.ID==item.ID);
  if (index > -1)
    {
      this.userList.splice(index, 1);
      this.counter+=1;
      this.closePopup$.next(this.counter);
    }
  }

addUser(item){
  let index: number;
  index = this.userList.findIndex(x=>x.ID==item.ID);
  if (index == -1)
    {
      this.userList.push(item);
      this.counter+=1;
    this.closePopup$.next(this.counter);
    
    }else 
    {
      console.log("user exist");
    }


  }




  constructor() { }

}

