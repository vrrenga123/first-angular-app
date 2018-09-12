import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';

const routes: Routes = [
    {
        path: '',
        component: PipesComponent,
        resolve: {field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }