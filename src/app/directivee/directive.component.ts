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
      <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
    `
  })
  export class DirectiveComponent {
    borderStyle = '1px solid black';
    power = 5;
    factor = 1;
  }
  