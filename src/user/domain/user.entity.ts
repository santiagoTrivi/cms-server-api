import { v4 as uuidv4 } from 'uuid';
import { UserProps, newUser } from './user.interface';
import { DataCipher } from '@auth/domain';
import { UserDto } from './user.dto';
import { AggregateRoot, UniqueId } from '@common/domain';
import { Email, Name, Password } from './valueObjest';





export class User extends AggregateRoot<UserProps> {

  constructor(props: UserProps, id: UniqueId){
    super(props, id)
  }

  get userId(): UniqueId{
    return this.getId;
  }

  get email(): Email{
    return this.props.email;
  }

  get firstName(): Name{
    return this.props.firstName;
  }
  
  get lastName(): Name{
    return this.props.lastName;
  }

  get password(): Password{
    return this.props.password;
  }

  get lastLogin(): Date | null {
    return this.props.lastLogin;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  get isVerified(): boolean {
    return this.props.isVerified;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public static create = (props: newUser) => {

    const currentDate = new Date();

    return new User({
      ...props,
      password: props.password ? props.password : undefined,
      isActive: true,
      isVerified: false,
      lastLogin: undefined,
      createdAt: currentDate,
      updatedAt: currentDate
    }, new UniqueId())
  }

  public ChangePassword = async (value, dataCipher: DataCipher) => {
    this.props.password = await Password.create(value, dataCipher);
  }


}
