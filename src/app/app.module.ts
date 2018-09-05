import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { LeftNavigationComponent } from './core/left-navigation/left-navigation.component'
import { AppComponent } from './app.component';
import { RouterModule, Routes, Route } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ApplicationContextService } from './core/app.context.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldResolver } from './core/resolver/fieldsResolver'
import { AppRoutingModule } from './app-routing.module';
import { EchoService } from './core/echo.services';
import { KeycloakService} from "./keycloak/keycloak.service";
import { HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import { KeycloakHttp, keycloakHttpFactory} from "./keycloak/keycloak.http";
import { ApcAvatarComponent } from './avatar/avatar.component';
import { LoginService } from './core/login.service';
import { ServiceContractService } from './core/service-contract.service';
import { CanActivateApp } from './app.authguard';
@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,ApcAvatarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,BrowserAnimationsModule,HttpModule
  ],
  exports: [
    
  ],
  providers: [
    {
			provide: KeycloakHttp,
			useFactory: keycloakHttpFactory,
			deps: [XHRBackend, RequestOptions, KeycloakService]
		},
		KeycloakService,
    ApplicationContextService, FieldResolver,EchoService,LoginService,ServiceContractService,CanActivateApp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
