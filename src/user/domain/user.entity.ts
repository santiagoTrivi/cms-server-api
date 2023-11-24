import { v4 as uuidv4 } from 'uuid';
import { UserProps } from './user.interface';
import { DataCipher } from '@auth/domain';
import { UserDto } from './user.dto';

export class User implements UserProps {
  readonly user_id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password?: string;
  readonly lastLogin: Date;
  readonly isActive: boolean;
  readonly isVerified: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: UserProps) {
    this.user_id = props.user_id;
    this.email = props.email;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.password = props.password ? props.password : undefined;
    this.lastLogin = props.lastLogin;
    this.isActive = props.isActive;
    this.isVerified = props.isVerified;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public static create = async (userDto: UserDto, dataCipher: DataCipher) => {
    const user_id = uuidv4();
    const hashedpassword = await dataCipher.hash(userDto.password);
    const currentDate = new Date();

    return new User({
      user_id,
      ...userDto,
      password: hashedpassword,
      isActive: true,
      isVerified: false,
      lastLogin: undefined,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
  };

  get getId(): string {
    return this.user_id;
  }
}
