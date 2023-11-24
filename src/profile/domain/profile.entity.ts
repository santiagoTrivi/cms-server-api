import { ProfileConstructorProps, ProfileProps } from './profile.interface';
import { v4 as uuidv4 } from 'uuid';

export class Profile implements ProfileProps {
  readonly profile_id: string;
  readonly userId: string;
  readonly headline: string;
  readonly summary: string;
  readonly website: string;
  readonly vanityName: string;
  readonly industry: string;
  readonly location: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: ProfileConstructorProps) {
    this.profile_id = props.profile_id;
    this.userId = props.userId;
    this.updatedAt = props.updatedAt;
    this.createdAt = props.createdAt;
  }

  public static createInstance = async (userId: ProfileProps['userId']) => {
    const profile_id: string = uuidv4();
    const currentDate = new Date();

    return new Profile({
      profile_id,
      userId,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
  };
}
