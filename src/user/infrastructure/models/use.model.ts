import { UserProps } from '@user/domain';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserModel implements UserProps {
  @PrimaryColumn()
  user_id: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  lastLogin: Date;

  @Column()
  isActive: boolean;

  @Column()
  isVerified: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
