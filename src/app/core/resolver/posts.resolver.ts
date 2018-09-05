import { Injectable }from '@angular/core';
import { Observable }from 'rxjs';
import { Resolve, RouterStateSnapshot,
   ActivatedRouteSnapshot } from '@angular/router';

   import { ICustomer } from '../app.model';
   import { EchoService } from '../echo.services';

@Injectable()
export class PostsResolver implements Resolve<ICustomer[]> {
   constructor(private echoService: EchoService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomer[]> {
       //debugger;
       return this.echoService.getPosts();
   }
}

