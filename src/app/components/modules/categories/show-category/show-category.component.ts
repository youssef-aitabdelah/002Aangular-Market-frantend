import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  @Input() category: any = null;

  @Output() editCategory = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  edit() {

    this.editCategory.emit(this.category);
  }

}
