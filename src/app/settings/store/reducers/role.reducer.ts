import * as fromRoles from '../actions/role.action';
import { Role } from 'src/app/models/role';

const r1 = new Role();
const r2 = new Role();
r1.name = 'ADMIN';
r2.name = 'USER';
export interface RoleState {
  data: Role[];
  loaded: boolean;
  loading: boolean;
}
export const intitialState: RoleState = {
  data: [r1, r2],
  loaded: false,
  loading: false,
};

export function reducer(
  state = intitialState,
  action: fromRoles.RoleActions
): RoleState {
  switch (action.type) {
    case fromRoles.LOAD_ROLE: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromRoles.LOAD_ROLE_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case fromRoles.LOAD_ROLE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getRolesLoading = (state: RoleState) => state.loading;
export const getRolesLoaded = (state: RoleState) => state.loaded;
export const getRoles = (state: RoleState) => state.data;
