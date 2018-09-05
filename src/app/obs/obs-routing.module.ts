import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObsComponent } from './obs.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';

const routes: Routes = [
    {
        path: '',
        component: ObsComponent,
        resolve: {field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObsRoutingModule { }