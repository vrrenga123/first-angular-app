import { Component, OnInit } from '@angular/core';
import { ICustomer,IProductDetails } from '../core/app.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PeoplesService } from './peoples.service';
import { Observable } from 'rxjs';
import { map, take, catchError  } from 'rxjs/operators';
import { IPeople } from '../core/app.model'
import { People } from './people.model';
import 'rxjs/add/operator/toPromise'
@Component({
   templateUrl: `list.component.html`,
    styles: [`
        a:hover {cursor: pointer}
    `]
})
export class ListComponent implements OnInit {
   public gets: IProductDetails[];
   public page: number;
   public loading = false;
    public title = "Hello World!!!";
   constructor(private activatedRoute: ActivatedRoute, private router: Router, private peopleService : PeoplesService) {
       //debugger;
   }

   public ngOnInit(): void {
       //debugger;
       this.activatedRoute.queryParams.subscribe(params => {
           this.page = +params['page'] || 0;
           this.gets = this.activatedRoute.snapshot.data.posts["value"].filter(post => post.ProductID > this.page * 2 && post.ProductID < this.page * 2 + 3);
       });
   }

   public nextPage(): void {
       this.router.navigate(['customers'], {queryParams: {page: this.page + 1}});
   }

   public previousPage(): void {
       this.router.navigate(['customers'], {queryParams: {page: this.page - 1}});
   }

   public go() : void{
       this.title = "How are you!!!";
       this.loading = true;
    //    this.peopleService.getPeoples()
    //     .then(res => {
    //        this.loading = false;
    //     }, 
    //     error => {
   
    //     })

    this.peopleService.getAuth()
        .then(res => {
           this.loading = false;
        }, 
        error => {
   
        })
   }
}
