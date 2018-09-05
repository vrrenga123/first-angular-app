import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { NavigationParam, BusinessUnit, Field, WorkflowName, QueryParam, NavigationField } from "../app.model";
import { ApplicationContextService } from "../app.context.service";
import { HttpClient } from '@angular/common/http';
import { map, take, catchError  } from 'rxjs/operators';

@Injectable()
export class FieldResolver implements Resolve<NavigationField> {
    public navigationField: NavigationField = null;
    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private appContextService: ApplicationContextService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        
        const context = this.appContextService.getContext();
        const isMobile = context.isMobile;

        return this.httpClient.get('./assets/jsons/navigationField.json').pipe(
        map(res => {
            //debugger;
            const field = res;    
            const nv : NavigationField = field as NavigationField;
            this.navigationField = nv;
            context.navigationField = nv;
            return nv;
        }));
            
    }

}