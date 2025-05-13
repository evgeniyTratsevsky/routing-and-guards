import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { User, UserService } from '../../services/user.service';

export const firstResolver: ResolveFn<User[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);

  console.log('First Resolver loading');

  return userService.getUsers();
};
