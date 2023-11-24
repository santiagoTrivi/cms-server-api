import { BaseEntityProps } from '@common/domain';
import { RoleTypes } from './roles.types';

export interface RoleProps extends BaseEntityProps {
  role_id: string;
  role_name: RoleTypes;
}
