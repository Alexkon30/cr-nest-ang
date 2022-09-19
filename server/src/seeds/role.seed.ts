import { DataSource } from 'typeorm';
import { UserRole } from '../modules/roles/role.entity';
import { Role } from '../generator/graphql.schema';
import { TYPEORM } from '../environments/index';

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
    entities: [UserRole],
    dropSchema: true,
  });

  await myDataSource.initialize();

  const ownerRole = myDataSource.manager.create(UserRole, {
    value: Role.OWNER,
  });
  const adminRole = myDataSource.manager.create(UserRole, {
    value: Role.ADMIN,
  });
  const teacherRole = myDataSource.manager.create(UserRole, {
    value: Role.TEACHER,
  });
  const studentRole = myDataSource.manager.create(UserRole, {
    value: Role.STUDENT,
  });

  await myDataSource.manager.save([
    ownerRole,
    adminRole,
    teacherRole,
    studentRole,
  ]);
};

main().catch((err) => console.log(err));
