import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { LoginComponent } from './components/login/login.component';
import { hcaComponent } from './components/hca/hca.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'orderList', component: OrdersListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hca', component: hcaComponent },
  {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
