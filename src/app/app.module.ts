import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.Interceptor';
import { Patient2Component } from './components/patient2/patient2.component';
import { Patient2Module } from './lazyLoad/patient2/patient2.module';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeMainComponent } from './components/employee-dashboard/employee-main/employee-main.component';
import { EmployeesInformationComponent } from './components/employee-dashboard/employees-information/employees-information.component';
import { DeliveryDashboardComponent } from './components/delivery-dashboard/delivery-dashboard.component';
import { DeliveryMainComponent } from './components/delivery-dashboard/delivery-main/delivery-main.component';
import { Home2Component } from './components/home2/home2.component';
import { Home2Module } from './lazyLoad/home2/home2.module';
import { DeliveryDashboardModule } from './lazyLoad/delivery-dashboard/delivery-dashboard.module';
import { EmployeeDashboardModule } from './lazyLoad/employee-dashboard/employee-dashboard.module';
import { PharmacerDashboardComponent } from './components/pharmacer-dashboard/pharmacer-dashboard.component';
import { PharmacerMainComponent } from './components/pharmacer-dashboard/pharmacer-main/pharmacer-main.component';
import { PharmacerCategorieComponent } from './components/pharmacer-dashboard/pharmacer-categorie/pharmacer-categorie.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';
import { Admin2Component } from './components/admin2/admin2.component';
import { Admin2Module } from './lazyLoad/admin2/admin2.module';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { PharmacistModule } from './lazyLoad/pharmacist/pharmacist.module';
import { AvilableOrdersComponent } from './components/delivery-dashboard/avilable-orders/avilable-orders.component';
import { EditAddressComponent } from './components/patient2/edit-address/edit-address.component';
import { OrderDetailsComponent } from './components/patient2/order-details/order-details.component';
import { EditDrugComponent } from './components/patient2/edit-drug/edit-drug.component';
import { SubscriptionComponent } from './components/home2/subscription/subscription.component';
import { SubscriptionCheckOutComponent } from './components/home2/subscription-check-out/subscription-check-out.component';

import { GetEmployeeComponent } from './components/admin2/get-employee/get-employee.component';

import { DashboardComponent } from './components/admin2/dashboard/dashboard.component';
import { SubscriptionSettingsComponent } from './components/admin2/subscription-settings/subscription-settings.component';
import { EditSubscriptionComponent } from './components/admin2/edit-subscription/edit-subscription.component';
import { NotificationsComponent } from './components/home2/notifications/notifications.component';
import { AboutusComponent } from './components/home2/aboutus/aboutus.component';
import { CategoriesComponent } from './components/pharmacist/categories/categories.component';
import { AddCategoryComponent } from './components/pharmacist/add-category/add-category.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: Home2Component,
    loadChildren: () =>
      import('./lazyLoad/home2/home2-routing.module').then(
        (m) => m.Home2RoutingModule
      ),
  },
  {
    path: 'Patient',
    component: Patient2Component,
    loadChildren: () =>
      import('./lazyLoad/patient2/patient2-routing.module').then(
        (m) => m.Patient2RoutingModule
      ),
  },

  {
    path: 'Delivery',
    component: DeliveryDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/delivery-dashboard/delivery-dashboard-routing.module'
      ).then((m) => m.DeliveryDashboardRoutingModule),
  },
  {
    path: 'Accountant',
    component: EmployeeDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/employee-dashboard/employee-dashboard-routing.module'
      ).then((m) => m.EmployeeDashboardRoutingModule),
  },

  {
    path: 'Admin',
    component: Admin2Component,
    loadChildren: () =>
      import('./lazyLoad/admin2/admin2-routing.module').then(
        (m) => m.Admin2RoutingModule
      ),
  },
  {
    path: 'pharmacist',
    component: PharmacistComponent,
    loadChildren: () =>
      import('./lazyLoad/pharmacist/pharmacist-routing.module').then(
        (m) => m.PharmacistRoutingModule
      ),
  },
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    EmployeeMainComponent,
    EmployeesInformationComponent,
    //-------
    DeliveryDashboardComponent,
    DeliveryMainComponent,
    Patient2Component,
    Home2Component,
    PharmacerDashboardComponent,
    PharmacerMainComponent,
    PharmacerCategorieComponent,
    DeliveryOrdersComponent,
    Admin2Component,
    PharmacistComponent,
    AvilableOrdersComponent,
    GetEmployeeComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //lazyLoad Models
    Patient2Module,
    Home2Module,
    Admin2Module,
    PharmacistModule,
    DeliveryDashboardModule,
    EmployeeDashboardModule,
    //--------
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
