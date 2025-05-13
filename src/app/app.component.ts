import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  template: `
    <h1>Guards & Resolvers</h1>
    <hr>
    <nav>
       <ul>
        <li>
          <a [routerLink]="'/'">Home</a>
        </li>
        <li>
          <a [routerLink]="'can-activate'">CanActivate</a>
        </li>  
        <li>
          <a [routerLink]="'can-deactivate'">CanDeactivate</a>
        </li>
        <li>
          <a [routerLink]="'can-match'">CanMatch</a>
        </li>  
        <li>
          <a [routerLink]="'resolver'">Resolver</a>
        </li>
        <li>
          <a [routerLink]="'1'">Run Policy</a>
        </li>
      </ul>
    </nav>
    <router-outlet/>
  `,
})
export class AppComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly queryParams = toSignal(
    this.route.queryParams.pipe(
      filter((query) => !!Object.keys(query).length),
      map((query) => console.log('Query:', query))
    )
  );
}
