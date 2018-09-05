import 'rxjs/Rx';
import { Injectable }from '@angular/core';
import { Observable }from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Resolve, RouterStateSnapshot,
   ActivatedRouteSnapshot } from '@angular/router';

import { ICustomer,IPeople } from '../app.model';
import { EchoService } from '../echo.services';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PeoplesResolver implements Resolve<IPeople[]> {
   constructor(private echoService: EchoService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPeople[]> {
       return this.echoService.getPeople();
   }
}

