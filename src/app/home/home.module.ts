import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationContextService } from '../core/app.context.service'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [ApplicationContextService]
})
export class HomeModule { }
