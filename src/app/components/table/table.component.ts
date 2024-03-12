import { Component } from '@angular/core';

export interface DataTable {
  Estudiante: string;
  Archivo: string;
  Plazo: string;
  Estado: string;
}

const ELEMENT_DATA: DataTable[] = [
  {Estudiante: 'Jose', Archivo: 'Justificacion.pdf', Plazo: '03/03/2024', Estado: 'En espera'},
  {Estudiante: 'Maria', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
  {Estudiante: 'Francisco', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
  {Estudiante: 'Jose', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
  {Estudiante: 'German', Archivo: '-', Plazo: '03/03/2024', Estado: 'En espera'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['Estudiante', 'Archivo', 'Plazo', 'Estado', 'Acciones'];
  dataSource = ELEMENT_DATA;

  // Método para cambiar el estado a "Aprobada" cuando se hace clic en el botón de check
  cambiarAprobado(element: DataTable) {
    element.Estado = 'Aprobada';
  }
  cambiarNegado(element: DataTable) {
    element.Estado = 'Negada';
  }
  cambiarEliminado(element: DataTable) {
    element.Estado = 'Eliminada';
  }
  
}

