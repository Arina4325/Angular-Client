import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDeleteContentComponent } from '../customer-delete-content/customer-delete-content.component';

import {
  MatDialog,
} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-customer-delete',
  standalone: true,
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss'],
  imports: [MatButtonModule]
})
export class CustomerDeleteComponent {

  constructor (public dialog: MatDialog){}


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CustomerDeleteContentComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
