import { BaseEntityProps } from '@common/domain';

export interface UserProps extends BaseEntityProps {
  readonly user_id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password?: string;
  readonly lastLogin: Date;
  readonly isActive: boolean;
  readonly isVerified: boolean;
}
