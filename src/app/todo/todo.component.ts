import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo',
  styles: [`
    .complete { text-decoration: line-through; width:320px; }
  `],
  template: `
  <div>
    <table style='width:700px;border: 0px;'>
    <tr>
    <td> <span [ngClass]="{ complete: item.complete }">{{ item.label }}</span></td>
    <td style='width:150px'><button style='width:120px'
      type="button"
      (click)="onChange.emit({ todo: item });">Done</button></td>
      <td style='width:150px'><button style='width:120px'
      type="button"
      (click)="onRemove.emit({ todo: item });">Delete</button></td>
      </tr>
      </table>
  </div>
  `
})
export class TodoComponent {
  @Input() item;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
