import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    resolve: {field: FieldResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }