import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './categorylist.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    resolve: {field: FieldResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }