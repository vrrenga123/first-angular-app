
import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
@Component({
   templateUrl: `home.component.html`,
})
export class HomeComponent {
    constructor(private router: Router){}

    go() {
        //this.flashMessagesService.grayOut(true);
        //this.flashMessagesService.show('we were at home' + Math.random(), { cssClass: 'alert-success', timeout: 3000, closeOnClick:true });
        // this.flashMessagesService.show('My component has initialized!', {
        //     classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
        //     timeout: 12000, // Default is 3000
        //   });
        //this.router.navigate(['/gets']);
    }
  ngOnInit() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
   
  }
}
