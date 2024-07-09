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
import { UsageHomepageComponent } from './sections-homepage/usage-homepage/usage-homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginPageComponent },
  {
    path: 'homepage',
    component: HomePageComponent,
    children: [
      { path: '', component: SectionBachecaUserComponent },
      { path: 'userHouse', component: SectionShowUserHouseHomepageComponent },
      { path: 'usageHomepage/:idHouse', component: UsageHomepageComponent },
    ],
  },
  {
    path: 'backoffice',
    component: BackofficePageComponent,
    children: [
      { path: '', component: SectionShowHousesBackofficeComponent },
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
