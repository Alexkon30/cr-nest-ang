import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Group, IStore } from '@app/_models';
import { Observable } from 'rxjs';
import { selectAllGroups } from '@app/_store/Groups/groups.selector';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrl: './group-selector.component.less'
})
export class GroupSelectorComponent {
  groups$: Observable<Group[]> = this.store.select(selectAllGroups);
  constructor(private store: Store<IStore>) {}

  ngOnInit() {
  }
}
