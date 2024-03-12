import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['Estudiante', 'Archivo', 'Plazo', 'Estado', 'Acciones'];
  dataSource: MatTableDataSource<DataTable>;

  constructor(){
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

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
}

