import type { IElement } from './common';
import type { Discipline } from './discipline';
import type { Group } from './group';
import type { Mark } from './mark';
import type { Room } from './room';
import type { Theme } from './theme';
import type { User } from './user';

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
