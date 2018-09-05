import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServiceContractService} from '../core/service-contract.service';
import { BlogsRoutingModule } from './blogs-routing.module'
import { BlogsComponent } from './blogs.component'

import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
   declarations: [BlogsComponent],
   imports: [
    CommonModule,
    SharedModule,BlogsRoutingModule,HttpModule,

  ],
   providers: [ServiceContractService]
})
export class BlogsModule {}
