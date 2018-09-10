import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JokeComponent } from './joke.component'
import { JokeListComponent } from './joke-list.component';
import { CardHoverDirective } from './cardhover.directive';
import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
@NgModule({
   declarations: [JokeComponent, JokeListComponent, CardHoverDirective, DirectiveComponent],
   imports: [
    CommonModule,
    DirectiveRoutingModule,SharedModule,FormsModule, ReactiveFormsModule
  ],
  
   providers: []
}) 
export class DirectiveModule {}
