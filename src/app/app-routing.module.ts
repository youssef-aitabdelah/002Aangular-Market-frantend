import { ModalComponent } from './components/categories/modal/modal.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ShowCategoriesComponent } from './components/show-categories/show-categories.component';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: '/categories', pathMatch: 'full'},
  { path: 'categories', children: [
      {path: "", component: ListCategoryComponent},
      {path: "create", component: AddCategoryComponent},
      {path: "modal", component: ModalComponent},
      {path: "edit/:id", component: EditCategoryComponent},
      { path:"{id}", component: ShowCategoriesComponent }
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
