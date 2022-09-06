import { Gender, UserType } from 'src/generator/graphql.schema';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @PrimaryGeneratedColumn('uuid') //constructor
  _id: string;

  @Column()
  email: string; //input

  @Column()
  password: string; //input

  @Column()
  firstName: string; //input

  @Column()
  lastName: string; //input

  @Column()
  avatar: string; //constructor

  @Column()
  gender: Gender; //input

  // @Column()
  // resetRasswordToken: string;

  // @Column()
  // resetPasswordExpires: number;

  @Column()
  isVerified: boolean; //constructor

  @Column()
  isOnline: boolean; //constructor

  @Column()
  isActive: boolean; //constructor

  @Column()
  isLocked: boolean; //constructor

  @Column()
  createdAt: string; //constructor

  @Column()
  updatedAt: string; //constructor

  @Column()
  type: UserType; //constructor

  constructor(user: Partial<User>) {
    Object.assign(
      this,
      plainToClass(User, user),
    );
    this._id = this._id || uuidv4();
    this.isVerified = this.isVerified !== undefined ? this.isVerified : false;
    this.isOnline = this.isOnline !== undefined ? this.isOnline : false;
    this.isLocked = this.isLocked !== undefined ? this.isLocked : false;
    this.isActive = this.isActive !== undefined ? this.isActive : true;
    this.type = this.type || UserType.BASIC;
    this.createdAt = this.createdAt || moment().format();
    this.updatedAt = moment().format();
    this.avatar = this.avatar || '';
  }
}
