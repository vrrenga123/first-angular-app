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
    selector: "joke",
    styles: [`
      .card-outline-primary { background-color : red; }
    `],
    template: `
  <div class="card card-block card-outline-primary" [ccCardHover]="{querySelector:'p'}">
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text"
       [style.display]="'none'">{{data.punchline}}</p>
  </div>
    `
  })
  export class JokeComponent {
    @Input("joke") data: Joke;
  }  