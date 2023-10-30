import { createReducer, on } from '@ngrx/store';

import { ScheduleConfig } from '@app/_models';
import moment from 'moment';
import { SheduleActions } from './schedule.actions';
import _ from 'lodash'

const initialState: ScheduleConfig = {
  sourceType: null,
  date: moment(),
  selectedElement: null
};

export const scheduleReducer = createReducer(
  initialState,
  
  //config
  on(SheduleActions.setDay, (_state, {date}) => {
    let copy = _.cloneDeep(_state)
    copy.date = date
    return copy
  }),
  on(SheduleActions.setSourceType, (_state, {sourceType}) => {
    let copy = _.cloneDeep(_state)
    copy.sourceType = sourceType
    return copy
  }),
  on(SheduleActions.setElement, (_state, {element}) => {
    let copy = _.cloneDeep(_state)
    copy.selectedElement = element
    return copy
  }),
);