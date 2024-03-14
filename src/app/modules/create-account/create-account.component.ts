import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmComponent } from 'src/app/components/popup-confirm/popup-confirm.component';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  constructor(public dialog: MatDialog) { }

  openCreate() {
    this.dialog.open(PopupConfirmComponent,
      {
        data: {
          titulo: 'Creaste tu cuenta',
          descripcion: 'Vuelve y entra a tu cuenta'
        }
      });
  }

  submitForm(signupForm: any) {
    console.log('Formulario enviado');
    console.log(signupForm.value);
  }
}
