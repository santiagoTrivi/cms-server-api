import { v4 as uuidv4 } from 'uuid';
import { NewUserProps, UserProps } from './user.interface';
import { DataCipher } from '@auth/domain';

export class User implements UserProps {
  readonly user_id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly lastLogin: Date;
  readonly isActive: boolean;
  readonly profileImg: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: UserProps) {
    this.user_id = props.user_id;
    this.email = props.email;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.password = props.password;
    this.lastLogin = props.lastLogin;
    this.isActive = props.isActive;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.profileImg = props.profileImg;
  }

  public static createInstance = async (
    newUserProps: NewUserProps,
    cipher: DataCipher,
  ) => {
    const id: string = uuidv4();
    const hashedPassword = await cipher.hash(newUserProps.password);
    const currentDate = new Date();

    return new User({
      user_id: id,
      ...newUserProps,
      password: hashedPassword,
      lastLogin: currentDate,
      isActive: true,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
  };
}
