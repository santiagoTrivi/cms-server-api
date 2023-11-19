import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryColumn()
  user_id: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  lastLogin: Date;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  profileImg: string;


}
