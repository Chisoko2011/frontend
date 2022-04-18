import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { hcaComponent } from './components/hca/hca.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HcaLogComponent } from './components/hca-log/hca-log.component';
import { HcaAssignedComponent } from './components/hca-assigned/hca-assigned.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersListComponent,
    hcaComponent,
    RegisterComponent,
    NavigationBarComponent,
    HcaLogComponent,
    HcaAssignedComponent,
    AddOrderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule



  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
