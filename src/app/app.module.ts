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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { ShowHousesComponent } from './components/show-houses/show-houses.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CardFreeHouseComponent } from './components/card-free-house/card-free-house.component';
import { HeaderBackofficeComponent } from './components/header-backoffice/header-backoffice.component';
import { SidebarHomepageComponent } from './components/sidebar-homepage/sidebar-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    BackofficePageComponent,
    SidebarComponent,
    FormAddUserComponent,
    ShowHousesComponent,
    CardFreeHouseComponent,
    HeaderBackofficeComponent,
    SidebarHomepageComponent,
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
