import { v4 as uuidv4 } from 'uuid';
import { RoleProps } from './role.interface';
import { RoleTypes } from './roles.types';

export class Role implements RoleProps {
  role_id: string;
  role_name: RoleTypes;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: RoleProps) {
    this.role_id = props.role_id;
    this.role_name = props.role_name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public static create(role_name: RoleTypes) {
    const role_id = uuidv4();
    const currentDate = new Date();

    return new Role({
      role_id,
      role_name,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
  }
}
