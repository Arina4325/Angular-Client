import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from 'src/app/shared/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customersChanged = new EventEmitter <Customer[]>();
  startedEditing = new Subject<number>();

  private customers: Customer[] = [
    new Customer ("Moshe", "Lev", "0506869954", "bububu"),
    new Customer ("Moris", "Dahn", "0506867485", "bebebe"),
  ];

  constructor() { }

  getCustomer(){
    return this.customers.slice();
  }

  getCustomers(index:number){
    return this.customers[index];
  }

  // addCustomer(customer: Customer){
  //   this.customers.push(customer);
  //   this.customersChanged.emit(this.customers.slice());
  // }

  // addCustomerToCustomers(customers: Customer[]){}

  updateCustomer(index: number, newCustomer: Customer){
    this.customers[index]= newCustomer;
    this.customersChanged.next(this.customers.slice());

  }

}
