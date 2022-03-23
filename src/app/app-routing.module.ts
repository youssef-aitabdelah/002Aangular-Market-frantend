import { ModalComponent } from './components/addresses/modal/modal.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ShowAddressesComponent } from './components/show-addresses/show-addresses.component';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: '/addresses', pathMatch: 'full'},
  { path: 'addresses', children: [
      {path: "", component: ListAddressComponent},
      {path: "create", component: AddAddressComponent},
      {path: "modal", component: ModalComponent},
      {path: "edit/:id", component: EditAddressComponent},
      { path:"{id}", component: ShowAddressesComponent }
    ], canActivate: [AuthGuard] 
  },
  { path: "login", component: LoginComponent, canActivate: [AfterAuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
