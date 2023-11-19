import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Group, IStore } from '@app/_models';
import { Store } from '@ngrx/store';
import { selectAllGroups } from '@app/_store/Groups/groups.selector';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrl: './group-info.component.less'
})
export class GroupInfoComponent {
  // groups$: Observable<Group[]> = this.store.select(selectAllGroups);

  constructor(private store: Store<IStore>) {}

}
