import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BackofficePageComponent } from './pages/backoffice-page/backoffice-page.component';
import { SectionRegisterNewUser } from './sections-backoffice/section-register-new-user/section-register-new-user.component';
import { SectionShowHousesBackofficeComponent } from './sections-backoffice/section-show-houses-backoffice/section-show-houses-backoffice.component';
import { SectionBachecaUserComponent } from './sections-homepage/section-bacheca-user/section-bacheca-user.component';
import { SectionShowUserHouseHomepageComponent } from './sections-homepage/section-show-user-house-homepage/section-show-user-house-homepage.component';
import { SectionBachecaAdminComponent } from './sections-backoffice/section-bacheca-admin/section-bacheca-admin.component';
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { UsageBackofficeComponent } from './sections-backoffice/usage-backoffice/usage-backoffice.component';
import { PaymentBackofficeComponent } from './sections-backoffice/payment-backoffice/payment-backoffice.component';
import { InfoUserComponent } from './sections-homepage/info-user/info-user.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginPageComponent },
  {
    path: 'homepage',
    component: HomePageComponent,
    children: [
      { path: '', component: SectionShowUserHouseHomepageComponent },
      { path: 'bacheca', component: SectionBachecaUserComponent },
      { path: 'houseDetails/:idHouse', component: HouseDetailsComponent },
      { path: 'infoUser', component: InfoUserComponent },
    ],
  },
  {
    path: 'backoffice',
    component: BackofficePageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: SectionShowHousesBackofficeComponent },
      { path: 'formaAddUser', component: SectionRegisterNewUser },
      { path: 'bachecaAdmin', component: SectionBachecaAdminComponent },
      { path: 'usageBackoffice/:idHouse', component: UsageBackofficeComponent },
      {
        path: 'paymentBackoffice/:idHouse',
        component: PaymentBackofficeComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
