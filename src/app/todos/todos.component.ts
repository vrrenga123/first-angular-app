import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html'

})
export class TodosComponent implements OnInit {
  todos: Observable<Todo[]>;
  singleTodo: Observable<Todo>;
  todoForm: FormGroup;

  constructor(
    private todoService: TodosService,
    private formBuilder: FormBuilder) {

    this.todoForm = this.formBuilder.group({
      'todo': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.todos = this.todoService.todos;
    this.singleTodo = this.todoService.todos.pipe(
      map(todos => todos.find(item => item.id === '1'))
    );

    this.todoService.loadAll();
    this.todoService.load('1');
  }

  onSubmit() {
    this.todoService.create({id : "0", value: this.todoForm.controls.todo.value, createdAt: this.todoForm.controls.todo.value});
  }

  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }
}