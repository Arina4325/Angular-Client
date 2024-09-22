import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddUserContent } from '../add-user-content/add-user-content.component';
import { CustomerEditContentComponent } from './customer-edit-content/customer-edit-content.component';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})

export class CustomereditComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CustomerEditContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
