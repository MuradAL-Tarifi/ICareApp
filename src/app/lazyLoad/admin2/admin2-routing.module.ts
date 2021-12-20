import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from 'src/app/components/admin2/add-employee/add-employee.component';
import { DashboardComponent } from 'src/app/components/admin2/dashboard/dashboard.component';
import { GetAllTestimonialComponent } from 'src/app/components/admin2/get-all-testimonial/get-all-testimonial.component';
import { PaymentOrdersComponent } from 'src/app/components/admin2/payment-orders/payment-orders.component';
import { GetEmployeeComponent } from 'src/app/components/admin2/get-employee/get-employee.component';
import { SubscriptionSettingsComponent } from 'src/app/components/admin2/subscription-settings/subscription-settings.component';
import { EditSubscriptionComponent } from 'src/app/components/admin2/edit-subscription/edit-subscription.component';

const routes: Routes = [
  {
    path: 'AddEmployee',
    component: AddEmployeeComponent,
  }
  ,
  {
    path:'GetEmployee',
    component:GetEmployeeComponent
  },
  {
    path: 'Testimonials',
    component: GetAllTestimonialComponent,
  },
  {
    path: 'Sales',
    component: PaymentOrdersComponent,
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path:"SubscriptionSettings",
    component:SubscriptionSettingsComponent
  },
  {
    path:'EditSubscription/:id',
    component:EditSubscriptionComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admin2RoutingModule {}
