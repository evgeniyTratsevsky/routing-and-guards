import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
})
export class ResolverComponent {
  private readonly route = inject(ActivatedRoute);

  readonly users$ = this.route.data.pipe(map((data) => data['users']));

  readonly vipUsers$ = this.route.data.pipe(map((data) => data['vipUsers']));
}
