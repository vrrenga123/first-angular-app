import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  template: `
  <form (ngSubmit)="submit()">
    <input name="label" [(ngModel)]="label">
    <button type="submit">Add todo</button>
  </form>
  `
})
export class TodoFormComponent {
  label: string;
  @Output() onAdd = new EventEmitter();

  submit() {
    if (!this.label) return;
    this.onAdd.emit({label: this.label});
    this.label = '';
  };
}