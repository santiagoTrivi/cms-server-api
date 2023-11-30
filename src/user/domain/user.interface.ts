import { BaseEntityProps } from '@common/domain';
import { Email, Name, Password } from './valueObjest';

export interface UserProps extends BaseEntityProps {
  readonly email: Email;
  readonly firstName: Name;
  readonly lastName: Name;
  password?: Password | undefined;
  readonly lastLogin?: Date | undefined;
  readonly isActive: boolean;
  readonly isVerified: boolean;
}


export type newUser = Pick<UserProps, 'email' | 'firstName' | 'lastName' | 'password'>