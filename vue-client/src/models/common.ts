import type { Group } from './group'
import type { Room } from './room'
import type { User } from './user'

export type Source = 'TEACHERS' | 'GROUPS' | 'ROOMS'

export interface IElement {
    id: number | string
}

export type Element = User | Group | Room
