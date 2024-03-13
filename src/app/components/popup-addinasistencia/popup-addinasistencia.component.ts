import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-addinasistencia',
  templateUrl: './popup-addinasistencia.component.html',
  styleUrls: ['./popup-addinasistencia.component.scss']
})
export class PopupAddinasistenciaComponent {
  selectedEstudiante: string = ''; 
  fechaInasistencia: Date | undefined; 

  constructor(
    public dialogRef: MatDialogRef<PopupAddinasistenciaComponent>
  ){}

  doAction() {

    if (!this.selectedEstudiante) {
      alert('Por favor, selecciona un estudiante.');
      return;
    }

    if (!this.fechaInasistencia) {
      alert('Por favor, selecciona la fecha de inasistencia.');
      return;
    }


    this.dialogRef.close({
      data: {
        Estudiante: this.selectedEstudiante,
        Archivo: '-',
        Plazo: this.fechaInasistencia.toLocaleDateString(), 
        Estado: 'En espera'
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

