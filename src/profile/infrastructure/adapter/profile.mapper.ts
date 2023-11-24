import { Profile } from '@profile/domain';
import { ProfileModel } from '../model/profile.model';

export class ProfileMapperTypeOrm {
  static ToDomain(profileModel: ProfileModel) {
    return new Profile({
      ...profileModel,
    });
  }
}
