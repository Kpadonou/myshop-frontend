import * as fromRoles from './role.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export interface SettingsState {
  roles: fromRoles.RoleState;
}

export const reducers: ActionReducerMap<SettingsState> = {
  roles: fromRoles.reducer,
};

export const getSettingsState = createFeatureSelector<SettingsState>(
  'settings'
);

// Roles state
export const getRolesState = createSelector(
  getSettingsState,
  (state: SettingsState) => state.roles
);

export const getAllRoles = createSelector(getRolesState, fromRoles.getRoles);
export const getRolesLoading = createSelector(
  getRolesState,
  fromRoles.getRolesLoading
);
export const getRolesLoaded = createSelector(
  getRolesState,
  fromRoles.getRolesLoaded
);
