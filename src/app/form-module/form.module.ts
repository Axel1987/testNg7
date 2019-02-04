import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: 'test-form', component: FormComponent}
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FormModule { }
