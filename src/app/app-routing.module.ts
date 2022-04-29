import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { LoginComponent } from './components/login/login.component';
import { hcaComponent } from './components/hca/hca.component';
import { RegisterComponent } from './components/register/register.component';
import { HcaAssignedComponent } from './components/hca-assigned/hca-assigned.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'orderList', component: OrdersListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hca', component: hcaComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'hca_assign', component: HcaAssignedComponent, data :{} },
  {path: 'add_order', component: AddOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
