import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor() {}

  getRoles(): Observable<Role[]> {
    /* return this.http
      .get<Role[]>('')
      .pipe(catchError((error: any) => Observable.throw(error.json()))); */
    const r = new Role();
    r.name = 'Boss';
    return of([r]);
  }
}
