import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const canActivateChild: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log('CanActivateChild Guard Works!');

  if (authService.getRole() === 'None') {
    return true;
  }

  return router.createUrlTree(['/not-allowed'], {
    queryParams: { type: 'can-activate-child' },
  });
};
