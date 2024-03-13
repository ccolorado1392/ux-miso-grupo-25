import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class PopupConfirmComponent {
  @Inject(MAT_DIALOG_DATA) public data: any

  ngOnInit()
  {
    debugger
    console.log(JSON.stringify(this.data))
  }
}
