import { IElement } from './common';
import { Group } from './group';
import { Role } from './role';

interface OrgUserRole extends IElement {
  roles: Array<{
    id: number;
    value: Role;
  }>;
}

export interface User extends IElement {
  firstName: string;
  lastName: string;
  patronymic: string;
  token?: string;
  email: string;
  // avatar: string;
  // role: Role
  orgUserRoles: OrgUserRole[];
  group: Omit<Group, 'students'>;
}

// {
//     "id": 27,
//     "email": "Lacy.Bashirian@gmail.com",
//     "firstName": "Eleazar",
//     "lastName": "Ankunding",
//     "patronymic": null,
//     "orgUserRoles": [
//         {
//             "id": 27,
//             "roles": [
//                 {
//                     "id": 4,
//                     "value": "STUDENT"
//                 }
//             ]
//         }
//     ],
//     "group": {
//         "id": 3,
//         "title": "IB"
//     }
// }
