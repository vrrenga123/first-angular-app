import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TodosService } from './todos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
   declarations: [TodosComponent],
   imports: [
    CommonModule,
    TodosRoutingModule,SharedModule,FormsModule, ReactiveFormsModule
  ],
   providers: [TodosService]
}) 
export class TodosModule {}
