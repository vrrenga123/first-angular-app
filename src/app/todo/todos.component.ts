import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todos',
  template: `
	<div style='width:700px'>
  	<todo-form 
      (onAdd)="addTodo($event)">
    </todo-form>
    <todo-list 
      [todos]="todos" 
      (onComplete)="completeTodo($event)"
      (onDelete)="removeTodo($event)">
    </todo-list>
  </div>  
  `
})
export class TodosComponent implements OnInit {
  todos: any[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo({label}) {
    this.todos = [...this.todos,{label, id: this.todos.length + 1}];
  }

  completeTodo({todo}) {
    var comp : boolean = false;
    comp = todo.complete != undefined ? !todo.complete : true;

    this.todos = this.todos.map(
      item => item.id === todo.id ? Object.assign({}, item, {complete: comp}) : item
    );
  }

  removeTodo({todo}) {
    this.todos = this.todos.filter(({id}) => id !== todo.id);
  }
}
