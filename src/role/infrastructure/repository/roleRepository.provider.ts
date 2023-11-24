import { RoleTypeOrmRepositoty } from "./roleTypeOrm.repository";


export const RolerepositoryProvider = {
    provide: 'RoleRepositoty',
    useExisting: RoleTypeOrmRepositoty,
  };