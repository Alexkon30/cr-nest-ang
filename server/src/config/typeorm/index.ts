import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TYPEORM } from "src/environments";
import { getMetadataArgsStorage } from "typeorm";


export class TypeOrmService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        const options: TypeOrmModuleOptions = {
            ...TYPEORM,
            type: "postgres",
            entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
            // entities: ['../../**/*.entity.ts', '../../**/*.entity.ts'],
			// migrations: ['../../migration/*.ts'],
			// subscribers: ['../../subscriber/*.ts'],
			// cli: {
			//   entitiesDir: '../../entities',
			//   migrationsDir: '../../migration',
			//   subscribersDir: '../../subscriber',
			// },
			synchronize: true,
			autoLoadEntities: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			keepConnectionAlive: true,
			logging: true,
			// dropSchema: true
        }
        return options
    }
}