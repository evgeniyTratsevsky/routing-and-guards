import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { CanDeactivateComponent } from "./can-deactivate.component";

// Интерфес для разных гардов. Каждый гард сможет реализовать совю имплементацию
export interface CanDeactivateData {
  isAllowedToLeave(): boolean;
  confirm(): boolean;
}

export const canDeactivate: CanDeactivateFn<CanDeactivateData> = (
  // export const canDeactivate: CanDeactivateFn<CanDeactivateComponent> = (
  // component: CanDeactivateComponent,
  component: CanDeactivateData,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | boolean => {
  console.log("CanDeactivate Guard works!");

  if (!component.isAllowedToLeave()) {
    return component.confirm();
  }

  return true;
};
