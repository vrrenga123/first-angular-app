import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { FieldResolver } from '../core/resolver/fieldsResolver';

const routes: Routes = [
    {
        path: '',
        component: EmployeesComponent,
        resolve: {field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }