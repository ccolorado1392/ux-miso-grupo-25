import { Component } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-configureinasistencia',
  templateUrl: './popup-configureinasistencia.component.html',
  styleUrls: ['./popup-configureinasistencia.component.scss']
})
export class PopupConfigureinasistenciaComponent {
  fechaInasistencia: Date | undefined; 

  constructor(
    public dialogRef: MatDialogRef<PopupConfigureinasistenciaComponent>
  ){}

  doAction() {

    if (!this.fechaInasistencia) {
      alert('Por favor, selecciona la fecha de inasistencia.');
      return;
    }


    this.dialogRef.close({
      data: {
        Plazo: this.fechaInasistencia.toLocaleDateString()
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
