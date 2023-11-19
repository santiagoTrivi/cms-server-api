import { BaseEntity } from '@common/domain';

export interface UserProps extends BaseEntity {
  readonly user_id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly lastLogin: Date;
  readonly isActive: boolean;
  readonly profileImg: string;
}

export type NewUserProps = Pick<
  UserProps,
  'email' | 'firstName' | 'lastName' | 'password' | 'profileImg'
>;
