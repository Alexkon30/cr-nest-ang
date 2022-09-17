import { Gender } from 'src/generator/graphql.schema';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'users',
  orderBy: {
    lastName: 'ASC',
  }
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column({
    nullable: true
  })
  firstName: string;

  @Column({
    nullable: true
  })
  lastName: string;

  @Column({
    nullable: true
  })
  patronymic: string;

  @Column({
    nullable: true
  })
  avatar: string;

  @Column({
    nullable: true
  })
  gender: Gender;

  @Column({
    default: false
  })
  isVerified: boolean;

  @Column({
    default: false
  })
  isOnline: boolean;

  @Column({
    default: false
  })
  isLocked: boolean;

  @CreateDateColumn()
  createdAt: number;

  @UpdateDateColumn()
  updatedAt: number;
}
