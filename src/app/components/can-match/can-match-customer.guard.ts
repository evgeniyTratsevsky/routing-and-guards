import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const canMatchCustomer: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  const authService = inject(AuthService);

  console.log('CanMatch Guard for Customer Works', segments);

  return authService.getRole() === 'Customer';
};
