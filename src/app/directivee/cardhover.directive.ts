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


@Directive({
    selector: "[ccCardHover]"
  })
  export class CardHoverDirective {
    @Input("ccCardHover")
    config: any = {
      querySelector: ".card-text"
    };
  
    @HostBinding("class.card-outline-primary") private ishovering: boolean;
  
    constructor(private el: ElementRef, private renderer: Renderer) {}
  
    @HostListener("mouseover")
    onMouseOver() {
      let part = this.el.nativeElement.querySelector(this.config.querySelector);
      this.renderer.setElementStyle(part, "display", "block");
      this.ishovering = true;
    }
  
    @HostListener("mouseout")
    onMouseOut() {
      let part = this.el.nativeElement.querySelector(this.config.querySelector);
      this.renderer.setElementStyle(part, "display", "none");
      this.ishovering = false;
    }
  }