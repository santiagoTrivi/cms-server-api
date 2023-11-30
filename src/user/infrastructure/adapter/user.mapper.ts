import { User } from '@user/domain';
import { UserModel } from '../models';
import { Email, Name, Password } from '@user/domain/valueObjest';
import { UniqueId } from '@common/domain';


export const toDomain = (userModel: UserModel): User =>{
  return new User({
    email: new Email(userModel.email),
    firstName: new Name(userModel.firstName),
    lastName: new Name(userModel.lastName),
    password: new Password(userModel.password),
    lastLogin: userModel.lastLogin ? userModel.lastLogin : undefined,
    isActive: userModel.isActive,
    isVerified: userModel.isVerified,
    createdAt: userModel.createdAt,
    updatedAt: userModel.updatedAt
  }, new UniqueId(userModel.userId))
}

export const toPersistMapper =(user: User) => {
  const persist = new UserModel();
    persist.userId = user.getId.toString,
    persist.email = user.email.getValue,
    persist.firstName = user.firstName.getValue,
    persist.lastName = user.lastName.getValue,
    persist.password = user.password.getValue,
    persist.lastLogin = user.lastLogin,
    persist.isActive = user.isActive,
    persist.isVerified = user.isVerified,
    persist.createdAt = user.createdAt,
    persist.updatedAt = user.updatedAt
    
  return persist;
}
