import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  open: boolean | undefined;
  categoryForm: FormGroup;
  @Output() addCategory = new EventEmitter();

  constructor() {

    this.categoryForm = new FormGroup({
        city: new FormControl(null, Validators.required),
        street: new FormControl(null, Validators.required),
        postal: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        type: new FormControl("Billing", Validators.required)
    })

  }

  ngOnInit(): void {
    this.createCategory();
  }

  createCategory() {

    this.addCategory.emit(this.categoryForm.value);
    this.categoryForm.reset();
    console.warn("CategoryForm :", this.categoryForm.value)
  }

  
}
