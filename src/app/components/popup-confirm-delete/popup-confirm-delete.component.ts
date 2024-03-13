import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-popup-confirm-delete',
  templateUrl: './popup-confirm-delete.component.html',
  styleUrls: ['./popup-confirm-delete.component.scss']
})
export class PopupConfirmDeleteComponent {
  constructor(public dialogRef: MatDialogRef<PopupConfirmDeleteComponent>) {}

  doAction() {
    this.dialogRef.close(true); // Indica que el usuario confirmó la eliminación
  }

  closeDialog() {
    this.dialogRef.close(false); // Indica que el usuario canceló la eliminación
  }
}
