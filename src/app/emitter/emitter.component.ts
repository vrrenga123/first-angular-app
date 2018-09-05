import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable, Observer} from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';
import { PeoplesService } from '../customers/peoples.service';
@Component({
    selector : 'zippy',
    template: `
    <loading [isLoading]="this.loading"></loading>
    <div class="zippy">
      <div (click)="toggle()">Toggle</div>
      <div [hidden]="!visible">
      <h1>Hello World!!! <div><code>observable|async</code>: Time: {{ time | async }}</div></h1>
        <ng-content></ng-content>
      </div><button (click)='go()'>Go with Peoples</button>
   </div>`})


  export class EmitterComponent {
    visible: boolean = true;
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();
    public loading = false;
    private myObservable = Observable.of(1, 2, 3);

    private myObserver = {
        next: x => alert('Observer got a next value: ' + x),
        error: err => alert('Observer got an error: ' + err),
        complete: () => alert('Observer got a complete notification'),
      };

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private peopleService : PeoplesService){}
    toggle() {
      this.visible = !this.visible;
      if (this.visible) {
        this.open.emit(this.myObserver);
      } else {
        this.close.emit(this.myObserver);
      }
      //debugger;
      this.myObservable.subscribe(this.myObserver);
    }

    time = new Observable<string>((observer: Observer<string>) => {
        setInterval(() => observer.next(new Date().toString()), 1000);
      });


      public go() : void{

        this.loading = true;
        this.peopleService.getPeoples()
         .then(res => {
            //debugger;
             
            this.loading = false;
         }, 
         error => {
             //return  new People(null);                
         })
    }
  }