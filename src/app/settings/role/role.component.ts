import { Component, OnInit } from '@angular/core';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  constructor(private store: Store<fromStore.SettingsState>) {}

  roles$: Observable<Role[]>;

  ngOnInit(): void {
    this.roles$ = this.store.select(fromStore.getAllRoles);
    this.store.dispatch(new fromStore.LoadRoles());
  }
}
