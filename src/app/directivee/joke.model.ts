import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
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


export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;
  
    constructor(setup: string, punchline: string) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide = true;
    }
  
    toggle() {
      this.hide = !this.hide;
    }
  }
  