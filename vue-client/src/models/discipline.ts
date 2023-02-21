import type { Theme } from "./theme";

export interface Discipline {
    id: string;
    title: string;
    themes: [Theme]
}