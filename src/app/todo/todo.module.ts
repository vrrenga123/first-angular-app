import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TodoService } from './todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent }  from './todo.component';
import { TodoMainComponent } from './todo-main.component';
import { DefaultPipe } from './default-image.pipe';
@NgModule({
   declarations: [TodosComponent,TodoFormComponent,TodoListComponent,TodoComponent,TodoMainComponent,DefaultPipe],
   imports: [
    CommonModule,
    TodoRoutingModule,SharedModule,FormsModule, ReactiveFormsModule
  ],
  
   providers: [TodoService]
}) 
export class TodoModule {}
