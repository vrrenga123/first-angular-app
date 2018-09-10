import { NgModule, Component, Pipe } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
@Pipe({
    name: "defaultImage"
  })
  export class DefaultPipe {
    transform(value: string, fallback: string, forceHttps: boolean = false ): string {
            let image = "";
            if (value) {
                image = value;
            } else {
                image = fallback;
            }
        
            if (forceHttps) {
                if (image.indexOf("https") == -1) {
                image = image.replace("http", "https");
                }
            }
        
            return image;
    }
  }
  