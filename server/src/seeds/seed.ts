import { DataSource } from 'typeorm';
import { UserRole } from '../modules/roles/role.entity';
import { Role } from '../generator/graphql.schema';
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
    entities: [UserRole, Organization, User, OrganizationUserRole],
    dropSchema: true,
  });

  await myDataSource.initialize();

  const { manager } = myDataSource


  //===============
  // Roles
  //===============

  const ownerRole = manager.create(UserRole, {
    value: Role.OWNER,
  });
  const adminRole = manager.create(UserRole, {
    value: Role.ADMIN,
  });
  const teacherRole = manager.create(UserRole, {
    value: Role.TEACHER,
  });
  const studentRole = manager.create(UserRole, {
    value: Role.STUDENT,
  });



  //===============
  // Organizations
  //===============

  const cambridge = manager.create(Organization, {
    title: 'University of Cambridge'
  });



  //===============
  // Users
  //===============

  const owner = manager.create(User, {
    email: 'owner@mail.com',
    password: await hashPassword('simplepass'),
    firstName: 'Alex',
    lastName: 'Owner'
  });


  await manager.save([
    ownerRole,
    adminRole,
    teacherRole,
    studentRole,
    cambridge,
    owner,
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
