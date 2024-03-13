import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddinasistenciaComponent } from 'src/app/components/popup-addinasistencia/popup-addinasistencia.component';
import { MatTableDataSource } from '@angular/material/table';
import { PopupConfirmComponent } from 'src/app/components/popup-confirm/popup-confirm.component';
import { PopupConfigureinasistenciaComponent } from 'src/app/components/popup-configureinasistencia/popup-configureinasistencia.component';
import { PopupConfirmDeleteComponent } from 'src/app/components/popup-confirm-delete/popup-confirm-delete.component';


export interface DataTable {
  Id: number;
  Estudiante: string;
  Archivo: string;
  Plazo: Date;
  Estado: string;
}

let ELEMENT_DATA: DataTable[] = [
  { Id: 1, Estudiante: 'Jose', Archivo: 'Justificacion.pdf', Plazo: new Date('2024-03-03'), Estado: 'En espera' },
  { Id: 2, Estudiante: 'Maria', Archivo: '-', Plazo: new Date('2024-03-03'), Estado: 'En espera' },
  { Id: 3, Estudiante: 'Francisco', Archivo: '-', Plazo: new Date('2024-03-03'), Estado: 'En espera' },
  { Id: 4, Estudiante: 'Jose', Archivo: '-', Plazo: new Date('2024-03-03'), Estado: 'En espera' },
  { Id: 5, Estudiante: 'German', Archivo: '-', Plazo: new Date('2024-03-03'), Estado: 'En espera' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  openInasistencias() {
    const dialogRef = this.dialog.open(PopupAddinasistenciaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        // Generar un nuevo ID para el nuevo elemento
        const newId = this.dataSource.data.length + 1;

        // Crear un nuevo objeto DataTable con los datos proporcionados
        const newData: DataTable = {
          Id: newId,
          Estudiante: result.data.Estudiante,
          Archivo: result.data.Archivo,
          Plazo: result.data.Plazo,
          Estado: result.data.Estado
        };

        // Agregar el nuevo elemento a ELEMENT_DATA
        ELEMENT_DATA.push(newData);

        // Actualizar la fuente de datos de la tabla
        this.dataSource.data = ELEMENT_DATA;
      }
    });
  }

  openConfigurar(element: DataTable) {
    const dialogRef = this.dialog.open(PopupConfigureinasistenciaComponent, {
      data: { fechaInasistencia: element.Plazo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {

        const index = this.dataSource.data.findIndex(x => x.Id === element.Id);
        if (index !== -1) {
          this.dataSource.data[index].Plazo = result.data.Plazo;

          this.dataSource.data = [...this.dataSource.data];
        }
      }
    });
  }

  openDelete(element: DataTable) {
    const dialogRef = this.dialog.open(PopupConfirmDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Confirmación de eliminación, realizar la eliminación
        const index = this.dataSource.data.findIndex(x => x.Id === element.Id);
        if (index !== -1) {
          this.dataSource.data.splice(index, 1);
          // Actualizar la fuente de datos
          this.dataSource.data = [...this.dataSource.data];
        }
      }
    });
  }
  displayedColumns: string[] = ['Estudiante', 'Archivo', 'Plazo', 'Estado', 'Acciones'];
  dataSource: MatTableDataSource<DataTable>;

  // Método para cambiar el estado a "Aprobada" cuando se hace clic en el botón de check
  cambiarAprobado(element: DataTable) {
    element.Estado = 'Aprobada';
  }
  cambiarNegado(element: DataTable) {
    element.Estado = 'Negada';
  }
  cambiarEliminado(element: DataTable) {
    debugger;
    const index = this.dataSource.data.findIndex(x => x.Id === element.Id);
    if (index != -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = this.dataSource.data;
    }
  }
  openAprobar() {
    this.dialog.open(PopupConfirmComponent,
      {
        data: {
          titulo: 'Acabas de aprobar la inasistencia',
          descripcion: 'Ya fue informado el estudiante'
        }
      });
  }
  openNegar() {
    this.dialog.open(PopupConfirmComponent,
      {
        data: {
          titulo: 'Acabas de negar la inasistencia',
          descripcion: 'Ya fue informado el estudiante'
        }
      });
  }

}