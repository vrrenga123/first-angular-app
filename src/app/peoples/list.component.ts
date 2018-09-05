import { Component, OnInit } from '@angular/core';
import { ICustomer, IPeople } from '../core/app.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer} from 'rxjs';
import { EmitterComponent } from '../emitter/emitter.component';
@Component({
   templateUrl: `list.component.html`,
    styles: [`
        a:hover {cursor: pointer}
    `]
})
export class PeopleListComponent implements OnInit {
   public peoples: IPeople[];
   public page: number;
   private myObservable = Observable.of(1, 2, 3);
   constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

   public ngOnInit(): void {
    //    this.activatedRoute.queryParams.subscribe(params => {
    //        this.page = +params['page'] || 0;
    //        this.peoples = this.activatedRoute.snapshot.data.posts.filter(post => post.id > this.page * 10 && post.id < this.page * 10 + 11);
    //    });
    //debugger;
    this.activatedRoute.queryParams.subscribe(params => {
        this.page = +params['page'] || 0;
            this.peoples = this.activatedRoute.snapshot.data.peop["value"];
    });
   }

   public nextPage(): void {
       this.router.navigate(['peoples'], {queryParams: {page: this.page + 1}});
   }

   public previousPage(): void {
       this.router.navigate(['peoples'], {queryParams: {page: this.page - 1}});
   }

   onOpen(event){
       //debugger;
        alert("Open");
        this.myObservable.subscribe(event);
   }
   onClose(event){
      // debugger;
        alert("Close");
   }
}
