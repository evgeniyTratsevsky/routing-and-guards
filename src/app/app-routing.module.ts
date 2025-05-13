import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NotAllowedComponent } from "./components/not-allowed/not-allowed.component";
import { CanActivateComponent } from "./components/can-activate/can-activate.component";

import { SettingsComponent } from "./components/can-activate-child/settings/settings.component";
import { ProductsComponent } from "./components/can-activate-child/products/products.component";
import { EditComponent } from "./components/can-activate-child/edit/edit.component";
import { canActivate } from "./components/can-activate/can-activate.guard";
import { canActivateChild } from "./components/can-activate-child/can-activate-child.guard";
import { canActivateLong } from "./components/can-activate/can-activate-long.guard";
import { CanDeactivateComponent } from "./components/can-deactivate/can-deactivate.component";
import { canDeactivate } from "./components/can-deactivate/can-deactivate.guard";
import { CanMatchAdminComponent } from "./components/can-match/can-match-admin/can-match-admin.component";
import { CanMatchSupportComponent } from "./components/can-match/can-match-support/can-match-support.component";
import { CanMatchCustomerComponent } from "./components/can-match/can-match-customer/can-match-customer.component";
import { CanMatchDefaultComponent } from "./components/can-match/can-match-default/can-match-default.component";
import { canMatchAdmin } from "./components/can-match/can-match-admin.guard";
import { canMatchSupport } from "./components/can-match/can-match-support.guard";
import { canMatchCustomer } from "./components/can-match/can-match-customer.guard";
import { ResolverComponent } from "./components/resolver/resolver.component";
import { firstResolver } from "./components/resolver/first-resolver.resolver";
import { secondResolver } from "./components/resolver/second-resolver.resolver";
import { RunGuardsAndResolversComponent } from "./components/run-guards-and-resolvers/run-guards-and-resolvers.component";

const AppRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent,
  },
  {
    path: "can-activate",
    component: CanActivateComponent,
    canActivate: [
      // canActivate,
      // canActivateLong,
    ],
    // canActivateChild: [canActivateChild],
    // children: [
    //   {
    //     path: "edit",
    //     component: EditComponent,
    //   },
    //   {
    //     path: "settings",
    //     component: SettingsComponent,
    //   },
    //   {
    //     path: "products",
    //     component: ProductsComponent,
    //   },
    // ],

    /* Проверять чилдовы еагрды трлько для edti, settings, products 
       Группировка через пустой маршрут
       Для роли Admin;
    */
    children: [
      {
        path: "",
        canActivateChild: [canActivateChild],
        children: [
          {
            path: "edit",
            component: EditComponent,
          },
          {
            path: "settings",
            component: SettingsComponent,
          },
        ],
      },
      {
        path: "products",
        component: ProductsComponent,
      },
    ],
  },
  {
    path: "can-deactivate",
    component: CanDeactivateComponent,
    canDeactivate: [canDeactivate],
  },
  {
    path: "can-match",
    component: CanMatchAdminComponent,
    canMatch: [canMatchAdmin],
  },
  {
    path: "can-match",
    component: CanMatchSupportComponent,
    canMatch: [canMatchSupport],
  },
  {
    path: "can-match",
    component: CanMatchCustomerComponent,
    canMatch: [canMatchCustomer],
  },
  {
    // Change authService.getRole()
    path: "can-match",
    component: CanMatchDefaultComponent,
    canMatch: [() => false],
    // лучше указать конкретный роут а не false
    // for Auth.role = 'None'
  },
  {
    path: "resolver",
    component: ResolverComponent,
    resolve: {
      users: firstResolver,
      vipUsers: secondResolver,
    },
  },
  {
    path: "not-allowed",
    component: NotAllowedComponent,
  },
  {
    path: ":entityId",
    component: RunGuardsAndResolversComponent,
    runGuardsAndResolvers: "pathParamsOrQueryParamsChange",
    canActivate: [
      () => {
        console.log("CanActivate Guard for Run Policy");
        return true;
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, { enableViewTransitions: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
