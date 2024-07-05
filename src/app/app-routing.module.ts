import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BackofficePageComponent } from './pages/backoffice-page/backoffice-page.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { ShowHousesComponent } from './components/show-houses/show-houses.component';
import { BachecaComponent } from './components/bacheca/bacheca.component';
import { UserHouseComponent } from './components/user-house/user-house.component';
import { BachecaAdminComponent } from './components/bacheca-admin/bacheca-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginPageComponent },
  {
    path: 'homepage',
    component: HomePageComponent,
    children: [
      { path: '', component: BachecaComponent },
      { path: 'userHouse', component: UserHouseComponent },
    ],
  },
  {
    path: 'backoffice',
    component: BackofficePageComponent,
    children: [
      { path: '', component: ShowHousesComponent },
      { path: 'formaAddUser', component: FormAddUserComponent },
      { path: 'bachecaAdmin', component: BachecaAdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
