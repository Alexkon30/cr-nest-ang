import { Gender, Local, UserType } from 'src/generator/graphql.schema';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';

@Entity({
  name: 'users',
  orderBy: {
    createdAt: 'ASC',
  },
})
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column()
  gender: Gender;

  @Column()
  local: Local;

  @Column()
  resetRasswordToken: string;

  @Column()
  resetPasswordExpires: number;

  @Column()
  isVerified: boolean;

  @Column()
  isOnline: boolean;

  @Column()
  isActive: boolean;

  @Column()
  isLocked: boolean;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  type: UserType;

  constructor(user: Partial<User>) {
    Object.assign(
      this,
      plainToClass(User, user, {
        excludeExtraneousValues: true,
      }),
    );
    this._id = this._id || uuidv4();
    this.isVerified !== undefined ? this.isVerified : false;
    this.isOnline = this.isOnline !== undefined ? this.isOnline : false;
    this.isLocked = this.isLocked !== undefined ? this.isLocked : false;
    this.isActive = this.isActive !== undefined ? this.isActive : true;
    this.type = this.type || UserType.BASIC;
    this.createdAt = this.createdAt || moment().format();
    this.updatedAt = moment().format();
  }
}
