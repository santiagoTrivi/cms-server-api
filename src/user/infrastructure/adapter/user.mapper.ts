import { User } from '@user/domain';
import { UserModel } from '../models';

export class UserMapperTypeOrm {
  static toDomain(userModel: UserModel): User {
    return new User({
      ...userModel,
    });
  }
}
