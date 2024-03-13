import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-addinasistencia',
  templateUrl: './popup-addinasistencia.component.html',
  styleUrls: ['./popup-addinasistencia.component.scss']
})
export class PopupAddinasistenciaComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupAddinasistenciaComponent>
  ){}

  doAction() {
    this.dialogRef.close({
      data: {
        Estudiante: 'Jose', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

