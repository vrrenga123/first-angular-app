import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MzButtonModule, MzIconMdiModule, MzIconModule,MzSelectModule  } from 'ngx-materialize';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NorthwindServiceContract } from '../core/northwind.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MzFeatureDiscoveryModule } from 'ngx-materialize'
@NgModule({
   declarations: [EmployeesComponent],
   imports: [
    CommonModule,
    EmployeesRoutingModule,SharedModule,FormsModule, ReactiveFormsModule, MzButtonModule,MzSelectModule,NgbModule.forRoot(),MzFeatureDiscoveryModule,MzIconMdiModule
  ],
   providers: [NorthwindServiceContract]
}) 
export class EmployeesModule {}
