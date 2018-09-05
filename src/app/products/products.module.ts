import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProductsComponent} from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import {ServiceContractService} from '../core/service-contract.service';
import { PeoplesService } from '../customers/peoples.service';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
   declarations: [ProductsComponent],
   imports: [
    CommonModule,
    SharedModule,ProductsRoutingModule,GridModule
  ],
   providers: [ServiceContractService,PeoplesService]
})
export class ProductsModule {}
