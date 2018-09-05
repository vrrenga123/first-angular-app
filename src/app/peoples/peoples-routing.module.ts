import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './list.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';
import { PeoplesResolver } from '../core/resolver/people.resolver';
const routes: Routes = [
    {
        path: '',
        component: PeopleListComponent,
        resolve: {peop: PeoplesResolver, field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }