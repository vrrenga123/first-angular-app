import { Component, OnInit } from '@angular/core';
import { ICustomer, IPeople } from '../core/app.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer} from 'rxjs';

import { CategoriesService } from './northwind.service';

import { State } from '@progress/kendo-data-query';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({

    template: `
    <kendo-grid
       [data]="view | async"
       [loading]="view.loading"
       [pageSize]="state.take"
       [skip]="state.skip"
       [sort]="state.sort"
       [sortable]="true"
       [pageable]="true"
       [scrollable]="'none'"
       (dataStateChange)="dataStateChange($event)"
     >
     <kendo-grid-column field="CategoryID" width="130"></kendo-grid-column>
     <kendo-grid-column field="CategoryName" width="200"></kendo-grid-column>
     <kendo-grid-column field="Description" [sortable]="false">
     </kendo-grid-column>
   </kendo-grid>
 `
})
export class CategoryComponent {
    public view;
    public state: State = {
        skip: 0,
        take: 5
    };

    constructor(private service: CategoriesService) {
        //debugger;
        this.view = service;
        this.service.query(this.state);
        
    }

    public dataStateChange(state: DataStateChangeEvent): void {
       // debugger;
        this.state = state;
        this.service.query(state);
    }
}