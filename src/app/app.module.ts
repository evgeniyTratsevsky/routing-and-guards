import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CanActivateComponent } from './components/can-activate/can-activate.component';
import { CanDeactivateComponent } from './components/can-deactivate/can-deactivate.component';
import { ResolverComponent } from './components/resolver/resolver.component';
import { RunGuardsAndResolversComponent } from './components/run-guards-and-resolvers/run-guards-and-resolvers.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    CanActivateComponent,
    CanDeactivateComponent,
    ResolverComponent,
    RunGuardsAndResolversComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
