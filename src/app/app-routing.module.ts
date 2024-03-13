import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RememberComponent } from './modules/remember/remember.component';
import { CreateAccountComponent } from './modules/create-account/create-account.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Remember',
    component:RememberComponent
  },
  {
    path:'Create',
    component:CreateAccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
