import { JwtInterceptor } from './services/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalComponent } from './components/addresses/modal/modal.component';
import { AddressComponent } from './components/address/address.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAddressesComponent } from './components/show-addresses/show-addresses.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    ModalComponent,
    AddressComponent,
    RegisterComponent,
    ShowAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: JwtInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
