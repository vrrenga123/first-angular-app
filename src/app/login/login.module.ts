import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzIconMdiModule, MzIconModule } from 'ngx-materialize';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MzTabModule,MzInputModule } from 'ngx-materialize';
import { ServiceContractService } from '../core/service-contract.service';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from '../core/login.service';
import { ApplicationContextService } from '../core/app.context.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule, MzButtonModule,
    MzIconModule,
    MzIconMdiModule,MzTabModule,MzInputModule,SharedModule
  ],
  declarations: [LoginComponent],
  providers:[ServiceContractService,LoginService,ApplicationContextService ]
})
export class LoginModule { }
