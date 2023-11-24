import { UserTypeOrmReposioty } from './userTypeOrm.repository';

export const repositoryProvider = {
  provide: 'UserRepository',
  useExisting: UserTypeOrmReposioty,
};
