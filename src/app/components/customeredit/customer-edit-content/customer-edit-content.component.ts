import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/customer.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-customer-edit-content',
  templateUrl: './customer-edit-content.component.html',
  styleUrls: ['./customer-edit-content.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, FormsModule],
})
export class CustomerEditContentComponent implements OnInit, OnDestroy{
  @ViewChild ('f') form:NgForm;
  subscription: Subscription;
  editedItemIndex: number; 
  editedItem: Customer;
  private customers: Customer[] ;
  // = [
  //   new Customer ("Moshe", "Lev", "0506869954", "bububu"),
  //   new Customer ("Moris", "Dahn", "0506867485", "bebebe"),
  // ];
  // form: FormGroup;
    
  constructor(private router: Router,  private customersService: CustomersService) {

  }

  ngOnInit(): void {

    this.subscription = this.customersService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex = index;
        this.editedItem = this.customersService.getCustomers(index);
        this.form.setValue({
          firstname: this.editedItem.firstname,
          lastname: this.editedItem.lastname,
          phone: this.editedItem.phone,
          role: this.editedItem.role
        })
      }
    );
  
    // this.form = new FormGroup ({
    //   'firstname': new FormControl(null),
    //   'lastname': new FormControl(null),
    //   'phone': new FormControl(null, [Validators.minLength(10)]),
    //   'role': new FormControl(null)
    // });
 
       
  }

  onAddItem(form: NgForm){
    //  console.log (this.form.value)

     const value = form.value;
     const newCustomer= new Customer (value.firstname, value.lastname, value.phone, value.role);
     this.customersService.updateCustomer(this.editedItemIndex, newCustomer)
    //  this.customersService.addCustomer(newCustomer);
    

  }

  // onAddToCustomers(){
  //   this.customersService.addCustomerToCustomers(this.customers)
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
