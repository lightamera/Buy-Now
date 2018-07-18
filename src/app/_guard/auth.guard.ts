import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSession } from '../_utils/userSession.util';
import { StringUtil } from '../_utils/string.util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (UserSession.getUserSession() == null || StringUtil.isNullOrEmpty(UserSession.getUserSession().user.id)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  }
}
