import { Action } from '@ngrx/store';
import { Role } from 'src/app/models/role';

export const LOAD_ROLE = '[ROLE] Load Roles';
export const LOAD_ROLE_FAIL = '[ROLE] Load Fail';
export const LOAD_ROLE_SUCCESS = '[ROLE] Load Success';
export const ADD_ROLE = '[ROLE] Add Role';
export const REMOVE_ROLE = '[ROLE] Remove Role';

export class LoadRoles implements Action {
  readonly type = LOAD_ROLE;
}

export class LoadRolesFail implements Action {
  readonly type = LOAD_ROLE_FAIL;
  constructor(public payload: any) {}
}

export class LoadRolesSuccess implements Action {
  readonly type = LOAD_ROLE_SUCCESS;
  constructor(public payload: Role[]) {}
}

export class AddRole implements Action {
  readonly type = ADD_ROLE;
  constructor(public payload: Role) {}
}

export class RemoveRole implements Action {
  readonly type = REMOVE_ROLE;
  constructor(public payload: number) {}
}

export type RoleActions =
  | AddRole
  | RemoveRole
  | LoadRoles
  | LoadRolesFail
  | LoadRolesSuccess;
