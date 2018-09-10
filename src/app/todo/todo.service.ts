import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  getTodos() {
    return [{
      label: 'Eat pizza',
      id: 0,
      complete: true
    }, {
      label: 'Do some coding',
      id: 1,
      complete: true
    }, {
      label: 'Sleep',
      id: 2,
      complete: false
    }, {
      label: 'Print tickets',
      id: 3,
      complete: true
    }];
  }
}