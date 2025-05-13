import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

export const canActivateLong: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('CanActivate Long Guard works!');

  return authService.isAuthenticated(true, 3000).pipe(
    tap((value) => console.log(`Long Guard Value: ${value}`)),
    switchMap((isAuthenticated) => {
      if (!isAuthenticated) {
        return of(
          router.createUrlTree(['not-allowed'], {
            queryParams: { type: 'example' },
          })
        );
      }

      return of(isAuthenticated);
    })
  );
};
