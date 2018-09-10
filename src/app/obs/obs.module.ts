import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ObsComponent } from './obs.component';
import { ObsRoutingModule } from './obs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MzButtonModule, MzIconMdiModule, MzIconModule,MzSelectModule  } from 'ngx-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceContractService } from '../core/service-contract.service'
@NgModule({
   declarations: [ObsComponent],
   imports: [
    CommonModule,
    ObsRoutingModule,SharedModule,FormsModule, ReactiveFormsModule, MzButtonModule,MzSelectModule,MzIconMdiModule
  ],
   providers: [ServiceContractService]
}) 
export class ObsModule {}
