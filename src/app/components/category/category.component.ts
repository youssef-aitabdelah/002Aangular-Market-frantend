import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: any = null;

  @Output() editCategory = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  edit() {

    this.editCategory.emit(this.category);
  }

}