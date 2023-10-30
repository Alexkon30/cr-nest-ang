import { IElement } from './common';
import { Discipline } from './discipline';
import { Group } from './group';
import { Mark } from './mark';
import { Room } from './room';
import { Theme } from './theme';
import { User } from './user';

export interface Lesson extends IElement {
//   status: string;
  teachers?: User[];
  groups?: Group[];
  discipline?: string;
  theme?: string;
  room?: number;
  dateStart: string;
  dateEnd: string;
  type?: string;
  previousLessonEnd?: string;
//   marks: Mark[];
}
export type Shedule = SheduleColumn[]

interface SheduleColumn {
  title: string;
  lessons: Lesson[]
}

export interface ScheduleConfig {
  sourceType: Source,
  date: moment.Moment,
  selectedElement: User | Group | Room
}

export enum Source {
  TEACHERS = 'TEACHERS',
  GROUPS = 'GROUPS',
  ROOMS = 'ROOMS',
}
