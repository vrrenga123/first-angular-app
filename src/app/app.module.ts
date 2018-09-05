import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeftNavigationComponent } from './core/left-navigation/left-navigation.component'
import { AppComponent } from './app.component';
import { RouterModule, Routes, Route } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ApplicationContextService } from './core/app.context.service';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent }
    ]),
    BrowserModule,SharedModule
  ],
  exports: [
    LeftNavigationComponent
  ],
  providers: [ApplicationContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
