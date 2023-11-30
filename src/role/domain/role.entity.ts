import { v4 as uuidv4 } from 'uuid';
import { RoleProps } from './role.interface';
import { RoleTypes } from './roles.types';

export class Role implements RoleProps {
  roleId: string;
  roleName: RoleTypes;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: RoleProps) {
    this.roleId = props.roleId;
    this.roleName = props.roleName;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public static create(roleName: RoleTypes) {
    const roleId = uuidv4();
    const currentDate = new Date();

    return new Role({
      roleId,
      roleName,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
  }
}
