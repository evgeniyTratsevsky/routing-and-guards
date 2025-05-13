import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { User, UserService } from "../../services/user.service";
import { map } from "rxjs/operators";

export const secondResolver: ResolveFn<User[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);

  console.log("Second Resolver loading");

  return userService.getVIPUsers(3000);
  // return userService.getVIPUsers(3000).pipe(
  //   map(() => {
  //     throw new Error("getVIPUsers Error");
  //   })
  // );
};
