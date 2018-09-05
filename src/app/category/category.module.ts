import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoriesService } from './northwind.service';
import { CategoryComponent } from './categorylist.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryRoutingModule } from './category-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      CategoryComponent
    ],
    imports: [
      HttpClientModule,CategoryRoutingModule,GridModule,CommonModule
    ],
    exports: [
      
    ],
    providers: [CategoriesService]
  })
  export class CategoryModule { }