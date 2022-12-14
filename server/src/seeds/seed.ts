import { DataSource } from 'typeorm';
import { Role } from '../modules/roles/role.entity';
import { RoleEnum } from '../generator/graphql.schema';
import { TYPEORM } from '../environments/index';
import { faker } from '@faker-js/faker';
import { User } from '../modules/users/user.entity';
import { hashPassword } from '../utils/index';
import { Organization } from '../modules/organizations/organization.entity';
import { OrganizationUserRole } from '../modules/org-user-roles/org-user-roles.entity';
import { Lesson } from '../modules/lessons/lesson.entity';
import { Group } from '../modules/groups/group.entity';

const main = async () => {
  const myDataSource = new DataSource({
    ...TYPEORM,
    type: 'postgres',
    synchronize: true,
    autoLoadEntities: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepConnectionAlive: false,
    logging: true,
    entities: [Role, Organization, User, OrganizationUserRole, Lesson, Group],
    dropSchema: true,
  });

  await myDataSource.initialize();

  const { manager } = myDataSource;

  //===============
  // Roles
  //===============

  const ownerRole = manager.create(Role, {
    value: RoleEnum.OWNER,
  });
  const adminRole = manager.create(Role, {
    value: RoleEnum.ADMIN,
  });
  const teacherRole = manager.create(Role, {
    value: RoleEnum.TEACHER,
  });
  const studentRole = manager.create(Role, {
    value: RoleEnum.STUDENT,
  });

  await manager.save([ownerRole, adminRole, teacherRole, studentRole]);

  //===============
  // Users
  //===============

  const owner = manager.create(User, {
    email: 'owner@mail.com',
    password: await hashPassword('simplepass'),
    firstName: 'Alex',
    lastName: 'Owner',
  });


  const students: User[] = [];

  for (let i = 0; i < 30; i++) {
    const student = manager.create(User, {
      email: faker.internet.email(),
      password: await hashPassword('simplepass'),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
    students.push(student);
  }


  const teachers: User[] = []

  for (let i = 0; i < 3; i++) {
    const techer = manager.create(User, {
      email: faker.internet.email(),
      password: await hashPassword('simplepass'),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
    teachers.push(techer);
  }


  await manager.save([owner, ...students, ...teachers]);

  //===============
  // Organizations
  //===============

  const cambridge = manager.create(Organization, {
    title: 'University of Cambridge',
  });

  await manager.save([cambridge]);

  //===============
  // OrganizationUserRoles
  //===============

  const orgUserRole = manager.create(OrganizationUserRole, {
    organization: cambridge,
    user: owner,
    roles: [ownerRole],
  });


  const studentsRelations: OrganizationUserRole[] = []

  students.forEach(student => {
    const studentsRelation = manager.create(OrganizationUserRole, {
      organization: cambridge,
      user: student,
      roles: [studentRole],
    })
    studentsRelations.push(studentsRelation);
  })


  const teachersRelations: OrganizationUserRole[] = []

  teachers.forEach(teacher => {
    const teacherRelation = manager.create(OrganizationUserRole, {
      organization: cambridge,
      user: teacher,
      roles: [teacherRole],
    })
    teachersRelations.push(teacherRelation);
  })


  await manager.save([orgUserRole, ...studentsRelations, ...teachersRelations]);

  //===============
  // Groups
  //===============

  const groups: Group[] = []

  const group_IK = manager.create(Group, {
    title: 'IK',
    students: []
  })

  const group_KE = manager.create(Group, {
    title: 'KE',
    students: []
  })

  const group_IB = manager.create(Group, {
    title: 'IB',
    students: []
  })

  groups.push(group_IK, group_KE, group_IB)

  students.forEach((student, i) => {
    groups[Math.floor(i / 10)].students.push(student)
  })

  await manager.save(groups);


  //===============
  // Lessons
  //===============

  const lesson1 = manager.create(Lesson, {
    teachers: [teachers[0]],
    groups: [group_IK],
    discipline: 'discipline 1',
    theme: 'theme 1',
    room: 213,
    dateStart: '2022-10-31T15:00Z',
    dateEnd: '2022-10-31T16:30Z',
    type: 'lecture',
  });

  const lesson2 = manager.create(Lesson, {
    teachers: [teachers[1]],
    groups: [group_IB],
    discipline: 'discipline 2',
    theme: 'theme 2',
    room: 213,
    dateStart: '2022-10-31T16:30Z',
    dateEnd: '2022-10-31T19:00Z',
    type: 'lecture',
  });

  const lesson3 = manager.create(Lesson, {
    teachers: [teachers[2]],
    groups: [group_KE],
    discipline: 'discipline 3',
    theme: 'theme 3',
    room: 213,
    dateStart: '2022-10-31T09:00Z',
    dateEnd: '2022-10-31T10:30Z',
    type: 'lecture',
  });

  await manager.save([lesson1, lesson2, lesson3]);

  await myDataSource.destroy();
};

main().catch((err) => console.log(err));
