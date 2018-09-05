import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from './app.model';
import { EchoService } from './echo.services';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Context } from './app.context';
import 'rxjs/add/operator/toPromise';
import {ServiceContractService} from './service-contract.service';
import { ApplicationContextService } from './app.context.service';
import { SideBarService } from './left-navigation/left-navigation.service';

@Injectable()
export class LoginService {
    public isLoggedin =false;
    public userToken : any;
    private context : Context;
    constructor(private serviceContractService: ServiceContractService,private echoService: EchoService, private httpClient : HttpClient, private applicationContextService: ApplicationContextService, private sideBarService : SideBarService) {
        this.context = this.applicationContextService.getContext();
        
    }
    

    public getUserAuth(username,password) : Promise<any> {
        return this.serviceContractService.getUserAuth.getUserAuthenticate(username,password)
        .then((res : any) => {this.sideBarService.isLoggedIn = true; this.sideBarService.userToken = res; return res}).catch((err : any) => {
            this.context.isLoggedIn=false;
        });
    }

    public getUsername(): string {

		return this.sideBarService.userToken == null ? '' : this.sideBarService.userToken.preferred_username;
	}

	public getFullName(): string {
        return this.sideBarService.userToken == null ? '' : this.sideBarService.userToken.name ;

	}


}