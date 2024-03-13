import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-addinasistencia',
  templateUrl: './popup-addinasistencia.component.html',
  styleUrls: ['./popup-addinasistencia.component.scss']
})
export class PopupAddinasistenciaComponent {
  selectedEstudiante: string = ''; // Variable para almacenar el estudiante seleccionado
  fechaInasistencia: Date | undefined; // Variable para almacenar la fecha de inasistencia

  constructor(
    public dialogRef: MatDialogRef<PopupAddinasistenciaComponent>
  ){}

  doAction() {
    // Verificar que se haya seleccionado un estudiante
    if (!this.selectedEstudiante) {
      alert('Por favor, selecciona un estudiante.');
      return;
    }

    // Verificar que se haya seleccionado una fecha de inasistencia
    if (!this.fechaInasistencia) {
      alert('Por favor, selecciona la fecha de inasistencia.');
      return;
    }

    // Cerrar el diálogo y enviar los datos al componente padre
    this.dialogRef.close({
      data: {
        Estudiante: this.selectedEstudiante,
        Archivo: '-', // No hay archivo especificado en este momento
        Plazo: this.fechaInasistencia.toLocaleDateString(), // Convertir la fecha a formato de cadena
        Estado: 'En espera'
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

