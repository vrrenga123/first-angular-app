import { Injectable }from '@angular/core';
import { Observable }from 'rxjs';
import { Resolve, RouterStateSnapshot,
   ActivatedRouteSnapshot } from '@angular/router';

   import { ICustomer,IProductDetails } from '../app.model';
   import { EchoService } from '../echo.services';

@Injectable()
export class ProductDetailsResolver implements Resolve<IProductDetails[]> {
   constructor(private echoService: EchoService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductDetails[]> {
       //debugger;
       return this.echoService.getProductDetails();
   }
}

