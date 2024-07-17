import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { GraphComponent } from './components/graph/graph.component';
import { UsageBackofficeComponent } from './sections-backoffice/usage-backoffice/usage-backoffice.component';
import { PaymentBackofficeComponent } from './sections-backoffice/payment-backoffice/payment-backoffice.component';
import { CardHouseHomepageComponent } from './components/card-house-homepage/card-house-homepage.component';
import { TablePaymentsComponent } from './components/table-payments/table-payments.component';
import { InfoUserComponent } from './sections-homepage/info-user/info-user.component';

// Guard
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { FormAddPaymentComponent } from './components/form-add-payment/form-add-payment.component';
import { ModalAddHouseComponent } from './components/modal-add-house/modal-add-house.component';

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
    HouseDetailsComponent,
    GraphComponent,
    UsageBackofficeComponent,
    PaymentBackofficeComponent,
    CardHouseHomepageComponent,
    TablePaymentsComponent,
    InfoUserComponent,
    FormAddPaymentComponent,
    ModalAddHouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    provideClientHydration(),
    provideHttpClient(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
