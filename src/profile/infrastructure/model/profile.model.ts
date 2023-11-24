import { UserModel } from '@user/infrastructure/models';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('profile')
export class ProfileModel {
  @PrimaryColumn()
  profile_id: string;

  @Column()
  userId: string;

  @OneToOne(() => UserModel, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserModel;

  @Column({ nullable: true })
  headline: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  vanityName: string;

  @Column({ nullable: true })
  industry: string;

  // todo: add location relationship

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
