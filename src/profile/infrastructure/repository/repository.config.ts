import { ProfileTypOrmRepository } from './profileTypeOrm.respository';

export const ProfilerepositoryConfig = {
  provide: 'ProfileRepository',
  useExisting: ProfileTypOrmRepository,
};
