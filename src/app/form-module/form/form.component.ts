import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  testForm: FormGroup;
  formData: null;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.testForm = this.fb.group({
      name: ['',
        [
          Validators.required,
          Validators.pattern(/[А-яA-z]/)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  submitForm() {
    this.formData = this.testForm.value;
  }

  cleanForm() {
    this.formData = null;
    this.testForm.reset();
  }
}
