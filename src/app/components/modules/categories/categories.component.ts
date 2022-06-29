import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/address';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe((res: any) => console.warn("Categories : ",this.categories = res));
  }

  persistCategory(data: Category) {
    this.categoryService.Save(data)
        .subscribe((res: any) => console.warn("PersistCategory : ",this.categories = [res, ...this.categories]))
  }

}
