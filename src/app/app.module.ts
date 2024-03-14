import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes//
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PopupConfirmComponent } from './components/popup-confirm/popup-confirm.component';
import { PopupConfigureinasistenciaComponent } from './components/popup-configureinasistencia/popup-configureinasistencia.component';
import { PopupAddinasistenciaComponent } from './components/popup-addinasistencia/popup-addinasistencia.component';

//Angular material//
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';

//Modulos//
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RememberComponent } from './modules/remember/remember.component';
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { PopupConfirmDeleteComponent } from './components/popup-confirm-delete/popup-confirm-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    FiltersComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    RememberComponent,
    CreateAccountComponent,
    PopupAddinasistenciaComponent,
    PopupConfigureinasistenciaComponent,
    PopupConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
