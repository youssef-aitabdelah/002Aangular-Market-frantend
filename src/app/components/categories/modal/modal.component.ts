import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  open: boolean | undefined;
  categoryForm: FormGroup;
  @Output() modalCategory = new EventEmitter();

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
  }

  createCategory() {

    this.modalCategory.emit(this.categoryForm.value);
    this.categoryForm.reset();
  }

}
