import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { CustomersComponent } from './customers.component';
import { PostResolver } from '../core/resolver/post.resolver';
import { PostsResolver } from '../core/resolver/posts.resolver';
import { EchoService } from '../core/echo.services'
import { CommonModule } from '@angular/common';
import { PeoplesService } from './peoples.service';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import {ServiceContractService} from '../core/service-contract.service';

import { ProductDetailsResolver } from "../core/resolver/productdetails.resolver"
import { ApplicationContextService } from '../core/app.context.service';
@NgModule({
   declarations: [ListComponent, CustomersComponent],
   imports: [
    CommonModule,
    CustomersRoutingModule,SharedModule
  ],
   providers: [EchoService, PostsResolver, PostResolver,PeoplesService,EchoService,ServiceContractService,ProductDetailsResolver,ApplicationContextService]
})
export class CustomersModule {}
