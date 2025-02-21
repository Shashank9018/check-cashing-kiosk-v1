import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: 'existing-customer', component: ExistingCustomerComponent },
  { path: 'new-user', component: NewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
