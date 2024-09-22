import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { FormControl, FormGroup} from '@angular/forms';
import { Customer } from 'src/app/shared/customer.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-customers-page-new',
  templateUrl: './customers-page-new.component.html',
  styleUrls: ['./customers-page-new.component.scss'],
  providers: [CustomersService],
})

export class CustomersPageNewComponent implements OnInit {
customers: Customer[];



  constructor (private customersService: CustomersService ){}


ngOnInit(): void {
  this.customers = this.customersService.getCustomer();

}


}

