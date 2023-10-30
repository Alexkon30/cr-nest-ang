import { ScheduleConfig } from "@app/_models";
import { createFeatureSelector } from '@ngrx/store';

export const selectScheduleConfig = createFeatureSelector<ScheduleConfig>('scheduleConfig');