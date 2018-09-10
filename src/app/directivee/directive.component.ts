import {
    Component,
    Directive,
    Renderer,
    ElementRef,
    NgModule,
    Input,
    HostBinding,
    HostListener
  } from "@angular/core";
  import { BrowserModule } from "@angular/platform-browser";
  import { Joke } from './joke.model';


  @Component({
    selector: "dapp",
    template: `
  <joke-list></joke-list>
  <p style="padding: 1rem"
      [ngStyle]="{
        'color': 'red',
        'font-weight': 'bold',
        'borderBottom': borderStyle
      }">Hello </p>
    `
  })
  export class DirectiveComponent {
    borderStyle = '1px solid black';
  }
  