import { UserTypeOrmReposioty } from "./userTypeOrm.repository";

export const repositoryConfig = {
    provide: 'UserRepository',
    useExisting: UserTypeOrmReposioty,
}