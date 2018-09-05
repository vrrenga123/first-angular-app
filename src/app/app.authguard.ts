import { RouterModule, Routes, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from './core/login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateApp implements CanActivate {
  constructor( private loginService: LoginService, public router: Router) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginService.getFullName() != '')
        return true;

    this.router.navigate(['']) 
    return false;
  }
}