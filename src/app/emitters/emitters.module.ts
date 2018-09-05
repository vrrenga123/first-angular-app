import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EmittersComponent} from './emitters.component';
import { EmittersRoutingModule } from './emitters-routing.module';
import { SharedModule } from '../shared/shared.module';
import {ServiceContractService} from '../core/service-contract.service';
import { PeoplesService } from '../customers/peoples.service';
@NgModule({
   declarations: [EmittersComponent],
   imports: [
    CommonModule,
    SharedModule,EmittersRoutingModule
  ],
   providers: [ServiceContractService,PeoplesService]
})
export class EmittersModule {}
