import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export type User = {
  id: number;
  name: string;
};

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(timeout: number = 1000): Observable<User[]> {
    return of([
      { id: 1, name: 'First User' },
      { id: 2, name: 'Second User' },
    ]).pipe(delay(timeout));
  }

  getVIPUsers(timeout: number = 1000): Observable<User[]> {
    return of([
      { id: 1, name: 'Third User' },
      { id: 2, name: 'Fourth User' },
    ]).pipe(delay(timeout));
  }
}
