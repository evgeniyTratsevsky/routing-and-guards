import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const canMatchSupport: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  const authService = inject(AuthService);

  console.log('CanMatch Guard for Support Works', segments);

  return authService.getRole() === 'Support';
};
