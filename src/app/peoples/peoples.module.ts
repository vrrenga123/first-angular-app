import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './list.component';
import { PeopleRoutingModule } from './peoples-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EmitterComponent } from '../emitter/emitter.component';
import { PeoplesResolver } from '../core/resolver/people.resolver';
import {ServiceContractService} from '../core/service-contract.service';
import { PeoplesService } from '../customers/peoples.service';
@NgModule({
   declarations: [PeopleListComponent],
   imports: [
    CommonModule,
    PeopleRoutingModule,SharedModule
  ],
   providers: [PeoplesResolver,ServiceContractService,PeoplesService]
}) 
export class PeopleModule {}
