import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';
import { PeoplesResolver } from '../core/resolver/people.resolver';
const routes: Routes = [
    {
        path: '',
        component: DirectiveComponent,
        resolve: {field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }