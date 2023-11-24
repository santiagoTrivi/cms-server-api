import { UserProps } from './user.interface';

export type UserDto = Pick<
  UserProps,
  'email' | 'firstName' | 'lastName' | 'password'
>;
