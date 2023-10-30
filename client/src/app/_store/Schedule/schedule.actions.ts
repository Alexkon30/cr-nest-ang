import { Group, Room, Source, User } from "@app/_models";
import { createActionGroup, props } from "@ngrx/store";
import moment from "moment";

export const SheduleActions = createActionGroup({
  source: 'Schedule',
  events: {
    'Set Day': props<{date: moment.Moment}>(),
    'Set SourceType': props<{sourceType: Source}>(),
    'Set Element': props<{element: User | Group | Room}>()
  }
})

// export const SheduleApiActions = createActionGroup({
//   source: 'Schedule API',
//   events: {
//     'Retrieved Teachers List': props<{teachers: User[]}>(),
//     'Retrieved Rooms List': props<{rooms: Room[]}>(),
//     'Retrieved Groups List': props<{groups: Group[]}>(),
//   },
// });
