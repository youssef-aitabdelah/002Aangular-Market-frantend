import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/modules/categories/categories.component';
import { AddCategoryComponent } from './components/modules/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/modules/categories/edit-category/edit-category.component';
import { ShowCategoryComponent } from './components/modules/categories/show-category/show-category.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/modules/products/products.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: '/categories', pathMatch: 'full'},
  { path: 'categories', children: [
      {path: "", component: CategoriesComponent},
      {path: "create", component: AddCategoryComponent},
      {path: "edit/:id", component: EditCategoryComponent},
      { path:"{id}", component: ShowCategoryComponent }
    ], canActivate: [AuthGuard] 
  },
  { path:"categories/products", children:[
      {path: "", component: ProductsComponent}
    ]
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
