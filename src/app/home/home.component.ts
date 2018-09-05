
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApplicationContextService } from '../core/app.context.service';
import { Context } from '../core/app.context';
import { Observable, Subscription } from 'rxjs';
@Component({
   templateUrl: `home.component.html`,
})
export class HomeComponent {
  vehicles: Observable<Array<any>>
  public context: Context;


  ticks = 0;
    private timer;
    // Subscription object
    private sub: Subscription;



    constructor(private router: Router, private applicationContextService: ApplicationContextService){
      this.context = this.applicationContextService.getContext();
      this.vehicles = Observable.interval(2200).map(i=> [{name: 'car 1'},{name: 'car 2'}])
      this.timer = Observable.timer(2000,5000);
        // subscribing to a observable returns a subscription object
        this.sub = this.timer.subscribe(t => this.tickerFunc(t));
      
    }

    tickerFunc(tick){
      this.vehicles.subscribe(value => value.push({name: 'car 1'},{name: 'car 2'}));
      console.log(this);
      this.ticks = tick
  }
  ngOnDestroy(){
    console.log("Destroy timer");
    // unsubscribe here
    this.sub.unsubscribe();

}


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
