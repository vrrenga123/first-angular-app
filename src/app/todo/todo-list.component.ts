import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'todo-list',
    template: `
    <ul>
    
      <table class="table table-hover">
            <tr *ngFor="let todo of todos"><td>
        <todo 
            [item]="todo"
            (onChange)="onComplete.emit($event)"
            (onRemove)="onDelete.emit($event)">
        </todo>
        </td></tr>
        </table>

    </ul>
    `
  })
  export class TodoListComponent {
    @Input()  todos;
    @Output() onComplete = new EventEmitter();
    @Output() onDelete = new EventEmitter();
  }
  