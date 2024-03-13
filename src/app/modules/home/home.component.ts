import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddinasistenciaComponent } from 'src/app/components/popup-addinasistencia/popup-addinasistencia.component';
import { MatTableDataSource } from '@angular/material/table';
import { PopupConfirmComponent } from 'src/app/components/popup-confirm/popup-confirm.component';
import { PopupConfigureinasistenciaComponent } from 'src/app/components/popup-configureinasistencia/popup-configureinasistencia.component';


export interface DataTable {
  Id: number;
  Estudiante: string;
  Archivo: string;
  Plazo: string;
  Estado: string;
}

let ELEMENT_DATA: DataTable[] = [
  {Id: 1, Estudiante: 'Jose', Archivo: 'Justificacion.pdf', Plazo: '03/03/2024', Estado: 'En espera'},
  {Id: 2, Estudiante: 'Maria', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
  {Id: 3, Estudiante: 'Francisco', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
  {Id: 4, Estudiante: 'Jose', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
  {Id: 5, Estudiante: 'German', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
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
      console.log(result);
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
    if(index != -1){
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
  openDelete() {
    this.dialog.open(PopupConfirmComponent,
      {
        data: {
          titulo: 'Borraste la inasistencia',
          descripcion: ''
        }
      });
  }   
  openConfigurar() {
    this.dialog.open(PopupConfigureinasistenciaComponent,
      {
        data: {
          titulo: 'Borraste la inasistencia',
          descripcion: ''
        }
      });
  }  
}