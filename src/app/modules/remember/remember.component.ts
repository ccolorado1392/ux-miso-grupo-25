import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmComponent } from '../../components/popup-confirm/popup-confirm.component';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss']
})

export class RememberComponent {

  constructor(public dialog: MatDialog) { }

  openRecuperada() {
    this.dialog.open(PopupConfirmComponent,
      {
        data: {
          titulo: 'Entra a tu correo',
          descripcion: 'Enviamos un correo para cambiar tu contraseña'
        }
      });
  }

  submitForm(forgotPasswordForm: any) {
    console.log('Formulario enviado');
    console.log(forgotPasswordForm.value);
  }
}