import 'rxjs/Rx';
import { Injectable }from '@angular/core';
import { Observable }from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Resolve, RouterStateSnapshot,
   ActivatedRouteSnapshot } from '@angular/router';

import { ICustomer } from '../app.model';
import { EchoService } from '../echo.services';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<ICustomer> {
   constructor(private echoService: EchoService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomer> {
       return this.echoService.getPost(+route.paramMap.get('id')).catch(() => Observable.of({title: 'Customer not found', body: 'Customer with given id doesn\'t exist'} as ICustomer));
   }
        
       
}


