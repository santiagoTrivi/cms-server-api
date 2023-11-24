import { RoleProps } from '@role/domain/role.interface';
import { RoleTypes } from '@role/domain/roles.types';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('role')
export class RoleModel implements RoleProps {
  @PrimaryColumn()
  role_id: string;

  @Column({ type: 'enum', enum: ['OWNER', 'ADMIN', 'EDITOR', 'CONTRIBUTOR'] })
  role_name: RoleTypes;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
