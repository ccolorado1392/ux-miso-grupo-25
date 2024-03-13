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
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any)
  {
    
  }

  ngOnInit()
  {
    console.log(JSON.stringify(this.data))
  }
}
