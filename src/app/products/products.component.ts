import { Component, OnInit } from '@angular/core';
import { ICustomer, IPeople } from '../core/app.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer} from 'rxjs';
import { products } from './products';

@Component({

    template: `
    <zippy></zippy>
        <kendo-grid [data]="gridData" [height]="410">
            <kendo-grid-column field="ProductID" title="ID" width="40" 
            [headerStyle]="{'background-color': '#666','color': '#fff','line-height': '1em'}"  
            [style]="{'background-color': '#888','color': '#fff'}">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250" 
            [headerStyle]="{'background-color': '#666','color': '#fff','line-height': '1em'}"  
            [style]="{'background-color': '#888','color': '#fff'}">
            <ng-template kendoGridFooterTemplate>Contacts: 77</ng-template>
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})
export class ProductsComponent {
    public gridData: any[] = products;
}