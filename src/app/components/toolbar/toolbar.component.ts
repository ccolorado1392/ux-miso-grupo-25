import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmComponent } from '../../components/popup-confirm/popup-confirm.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog) { }

  openSalir() {
    this.dialog.open(PopupConfirmComponent,
      {
        data: {
          titulo: 'Saliste de tu cuenta',
          descripcion: 'Vuelve pronto!!'
        }
      });
  }
}
