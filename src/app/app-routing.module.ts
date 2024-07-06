import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BackofficePageComponent } from './pages/backoffice-page/backoffice-page.component';
import { SectionRegisterNewUser } from './sections-backoffice/section-register-new-user/section-register-new-user.component';
import { ShowHousesComponent } from './components/show-houses/show-houses.component';
import { SectionBachecaUserComponent } from './sections-homepage/section-bacheca-user/section-bacheca-user.component';
import { UserHouseComponent } from './components/user-house/user-house.component';
import { SectionBachecaAdminComponent } from './sections-backoffice/section-bacheca-admin/section-bacheca-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginPageComponent },
  {
    path: 'homepage',
    component: HomePageComponent,
    children: [
      { path: '', component: SectionBachecaUserComponent },
      { path: 'userHouse', component: UserHouseComponent },
    ],
  },
  {
    path: 'backoffice',
    component: BackofficePageComponent,
    children: [
      { path: '', component: ShowHousesComponent },
      { path: 'formaAddUser', component: SectionRegisterNewUser },
      { path: 'bachecaAdmin', component: SectionBachecaAdminComponent },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
