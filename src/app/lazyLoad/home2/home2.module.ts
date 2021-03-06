import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { MainComponent } from 'src/app/components/home2/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/components/home2/login/login.component';
import { RegistrationComponent } from 'src/app/components/home2/registration/registration.component';
import { DrugComponent } from 'src/app/components/home2/drug/drug.component';
import { DrugsComponent } from 'src/app/components/home2/drugs/drugs.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CartComponent } from 'src/app/components/home2/cart/cart.component';
import { CheckOutComponent } from 'src/app/components/home2/check-out/check-out.component';
import { ThankYouComponent } from 'src/app/components/home2/thank-you/thank-you.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionComponent } from 'src/app/components/home2/subscription/subscription.component';
import { SubscriptionCheckOutComponent } from 'src/app/components/home2/subscription-check-out/subscription-check-out.component';
import { NotificationsComponent } from 'src/app/components/home2/notifications/notifications.component';
import { AboutusComponent } from 'src/app/components/home2/aboutus/aboutus.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { ThankYou2Component } from 'src/app/components/home2/thank-you2/thank-you2.component';
import { ForgotPasswordComponent } from 'src/app/components/home2/forgot-password/forgot-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    DrugComponent,
    DrugsComponent,
    CartComponent,
    CheckOutComponent,
    ThankYouComponent,
    SubscriptionComponent,
    SubscriptionCheckOutComponent,
    NotificationsComponent,
    AboutusComponent,
    MainComponent,
    ThankYou2Component,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    MdbCarouselModule,
    NgxSpinnerModule

  ]
})
export class Home2Module { }
