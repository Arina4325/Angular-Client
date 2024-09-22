// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { CustomersService } from 'src/app/services/customers.service';
// import { FormControl, FormGroup} from '@angular/forms';
// import { Customer } from 'src/app/shared/customer.model';
// import { Subscription } from 'rxjs';



// @Component({
//   selector: 'app-customers-page',
//   templateUrl: './customers-page.component.html',
//   styleUrls: ['./customers-page.component.scss'],
//   providers: [CustomersService],
 
//   })

// export class CustomersPageComponent implements OnInit, OnDestroy {
//   customers: Customer[];
//   //  = [
//   //   new Customer ("Moshe", "Lev", "0506869954", "bububu"),
//   //   new Customer ("Moris", "Dahn", "0506867485", "bebebe"),
//   // ];
//   private subscription: Subscription;

//   // customerSearch = '';

//   // myForm = new FormGroup ({
//   //   txt: new FormControl (""),
//   // });

//   // get txt(){
//   //   return this.myForm.get('txt');
//   // }


//   constructor (private customersService: CustomersService ){
//     // this.customers = this.customersService.customersList;

//   }

// ngOnInit(): void {
//   this.customers = this.customersService.getCustomer();
//   this.subscription=this.customersService.customersChanged.subscribe(
//     (customers:Customer[])=>
//      { this.customers = customers;}

//   );

//   // this.myForm.get('txt')!.valueChanges.subscribe((data)=>{
//   //   this.search();
//   //   });


// }

// onEditItem(index: number){
//   this.customersService.startedEditing.next(index);
// };


// // search(){
// //   this.customers = this.customersService.customersList;

// //  this.customers=this.customers.filter(x => x.ID.indexOf(this.txt!.value)>-1 || x.firstname.indexOf(this.txt!.value )>-1 || x.lastname.indexOf(this.txt!.value )>-1)

// ngOnDestroy(){
//  this.subscription.unsubscribe();
// };
// }








