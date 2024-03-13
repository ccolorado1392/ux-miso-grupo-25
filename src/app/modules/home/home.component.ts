import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmComponent } from '../../components/popup-confirm/popup-confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(public dialog: MatDialog) { }

  openInasistencias() {
    this.dialog.open(PopupConfirmComponent, 
      {
      data: {
        titulo: 'Hello World',
        descripcion: 'Seguro quiere hacer'
      }
    });
  }
}
