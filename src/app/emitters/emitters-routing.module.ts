import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmittersComponent } from './emitters.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';
const routes: Routes = [
    {
        path: '',
        component: EmittersComponent,
        resolve: {field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmittersRoutingModule { }