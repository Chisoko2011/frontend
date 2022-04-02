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
import { HcaComponent } from './components/hca/hca.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersListComponent,
    HcaComponent
  
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
