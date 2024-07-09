import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BackofficePageComponent } from './pages/backoffice-page/backoffice-page.component';
import { SectionRegisterNewUser } from './sections-backoffice/section-register-new-user/section-register-new-user.component';
import { SectionShowHousesBackofficeComponent } from './sections-backoffice/section-show-houses-backoffice/section-show-houses-backoffice.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CardFreeHouseComponent } from './components/card-free-house/card-free-house.component';
import { SidebarHomepageComponent } from './components/sidebar-homepage/sidebar-homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionShowUserHouseHomepageComponent } from './sections-homepage/section-show-user-house-homepage/section-show-user-house-homepage.component';
import { SectionBachecaUserComponent } from './sections-homepage/section-bacheca-user/section-bacheca-user.component';
import { HeaderComponent } from './components/header/header.component';
import { CardHouseUserComponent } from './components/card-house-user/card-house-user.component';
import { SectionBachecaAdminComponent } from './sections-backoffice/section-bacheca-admin/section-bacheca-admin.component';
import { TableNotificationComponent } from './components/table-notification/table-notification.component';
import { UsageHomepageComponent } from './sections-homepage/usage-homepage/usage-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    BackofficePageComponent,
    SectionRegisterNewUser,
    SectionShowHousesBackofficeComponent,
    CardFreeHouseComponent,
    SidebarHomepageComponent,
    FooterComponent,
    SectionShowUserHouseHomepageComponent,
    SectionBachecaUserComponent,
    HeaderComponent,
    CardHouseUserComponent,
    TableNotificationComponent,
    SectionBachecaAdminComponent,
    UsageHomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
