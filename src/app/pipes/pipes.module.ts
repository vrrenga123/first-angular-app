import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FetchJsonPipe } from './fetch-json.pipe';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MzButtonModule, MzIconMdiModule, MzIconModule,MzSelectModule  } from 'ngx-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceContractService } from '../core/service-contract.service'
@NgModule({
   declarations: [PipesComponent, FetchJsonPipe],
   imports: [
    CommonModule,
    PipesRoutingModule,SharedModule,FormsModule, ReactiveFormsModule, MzButtonModule,MzSelectModule,MzIconMdiModule
  ],
   providers: [ServiceContractService]
}) 
export class PipesModule {}
