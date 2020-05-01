import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromService from '../../../services';
import * as roleActions from '../actions/role.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RolesEffects {
  constructor(
    private actions$: Actions,
    private roleService: fromService.RolesService
  ) {}

  @Effect()
  loadRoles$ = this.actions$.pipe(
    ofType(roleActions.LOAD_ROLE),
    switchMap(() => {
      return this.roleService.getRoles().pipe(
        map((roles) => new roleActions.LoadRolesSuccess(roles)),
        catchError((error) => of(new roleActions.LoadRolesFail(error)))
      );
    })
  );
}
