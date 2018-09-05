import { ICustomer } from '../core/app.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   template: '<h1>{{get.title}}</h1><p>{{get.body}}</p>'
})
export class CustomersComponent implements OnInit {
   public get: ICustomer;

   constructor(private route: ActivatedRoute){
       //debugger;
   }

   ngOnInit() {
       this.get = this.route.snapshot.data.post;
   }
}

