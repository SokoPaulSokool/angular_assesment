import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { DataServiceService } from './data-service.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  constructor(private dataService: DataServiceService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.dataService.user) {
      return true;
    }
     this.router.navigate(['login']);
    return false;
  }
}
