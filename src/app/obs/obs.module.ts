import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ObsComponent } from './obs.component';
import { ObsRoutingModule } from './obs-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
   declarations: [ObsComponent],
   imports: [
    CommonModule,
    ObsRoutingModule,SharedModule,FormsModule, ReactiveFormsModule
  ],
   providers: []
}) 
export class ObsModule {}
