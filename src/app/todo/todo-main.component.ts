import { Component } from '@angular/core';

@Component({
  selector: 'todoapp',
  template: `
  <img [src]="imageUrl | defaultImage:'http://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg':ishttp"/>
    <todos></todos>
  `
})
export class TodoMainComponent {
  //imageUrl :string = "./assets/images/images.jpg";
  imageUrl :string = "";
  ishttp : boolean = false;
 }