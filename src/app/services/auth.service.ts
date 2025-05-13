import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";

type Role = "Admin" | "Support" | "Customer" | "None";

@Injectable({ providedIn: "root" })
export class AuthService {
  isAuthenticated(value: boolean = true, delayValue: number = 0) {
    return of(value).pipe(delay(delayValue));
  }

  getRole(): Role {
    return 'None';
    // return 'Customer';
    // return 'Support';
    // return "Admin";
  }
}
