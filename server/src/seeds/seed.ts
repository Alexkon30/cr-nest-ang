import { DataSource } from 'typeorm';
import { Role } from '../modules/roles/role.entity';
import { Role as RoleEnum } from '../generator/graphql.schema';
import { TYPEORM } from '../environments/index';
import { faker } from '@faker-js/faker';
import { User } from '../modules/users/user.entity';
import { hashPassword } from '../utils/index';
import { Organization } from '../modules/organizations/organization.entity';
import { OrganizationUserRole } from '../modules/org-user-roles/org-user-roles.entity';


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
    entities: [Role, Organization, User, OrganizationUserRole],
    dropSchema: true,
  });

  await myDataSource.initialize();

  const { manager } = myDataSource


  
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

  await manager.save([
    ownerRole,
    adminRole,
    teacherRole,
    studentRole,
  ]);

  

  //===============
  // Users
  //===============

  const owner = manager.create(User, {
    email: 'owner@mail.com',
    password: await hashPassword('simplepass'),
    firstName: 'Alex',
    lastName: 'Owner'
  });

  const users = []

  for(let i = 0; i < 10; i++) {
    const user = manager.create(User, {
      email: faker.internet.email(),
      password: await hashPassword('simplepass'),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    });
    users.push(user)
  }

  await manager.save([
    owner,
    ...users
  ]);



  //===============
  // Organizations
  //===============

  const cambridge = manager.create(Organization, {
    title: 'University of Cambridge'
  });

  await manager.save([
    cambridge
  ]);



  //===============
  // OrganizationUserRoles
  //===============

  const orgUserRole = manager.create(OrganizationUserRole, {
    organization: cambridge,
    user: owner,
    roles: [ownerRole]
  })

  await manager.save([
    orgUserRole
  ]);

  await myDataSource.destroy()
};

main().catch((err) => console.log(err));
