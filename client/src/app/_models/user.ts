import { IElement } from './common';
import { Group } from './group';
import { Role } from './role';

export interface User extends IElement {
  firstName: string;
  lastName: string;
  patronymic: string;
  token?: string;
  email: string;
  // avatar: string;
  roles: Array<{
    id: number;
    value: Role;
  }>;
  group: Omit<Group, 'students'>;
}

// {
//     "id": 27,
//     "email": "Lacy.Bashirian@gmail.com",
//     "firstName": "Eleazar",
//     "lastName": "Ankunding",
//     "patronymic": null,
//     "roles": [
//        {
//          "id": 4,
//          "value": "STUDENT"
//        }
//      ]
//     "group": {
//         "id": 3,
//         "title": "IB"
//     }
// }
