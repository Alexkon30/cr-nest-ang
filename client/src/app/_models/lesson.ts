import { Discipline } from './discipline';
import { Group } from './group';
import { Mark } from './mark';
import { Room } from './room';
import { Theme } from './theme';
import { User } from './user';

export interface Lesson {
  id: number;
//   status: string;
  teachers: User[];
  groups: Group[];
  discipline: string;
  theme: string;
  room: number;
  dateStart: string;
  dateEnd: string;
  type: string;
  previousLessonEnd?: string;
//   marks: Mark[];
}
export type Shedule = SheduleColumn[]

interface SheduleColumn {
  title: string;
  lessons: Lesson[]
}
