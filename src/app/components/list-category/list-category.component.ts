import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/address';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe((res: any) => this.categories = res);
    console.warn("Categories : ",this.categories);
  }

  persistCategory(data: Category) {
    this.categoryService.Save(data)
        .subscribe((res: any) => this.categories = [res, ...this.categories])
  }

}
