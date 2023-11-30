import { BaseEntityProps } from '@common/domain';
import { RoleTypes } from './roles.types';

export interface RoleProps extends BaseEntityProps {
  roleId: string;
  roleName: RoleTypes;
}
