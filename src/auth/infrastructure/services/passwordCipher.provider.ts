import { PasswordCipher } from './passwordCipher';

export const PasswordCipherProvider = {
  provide: 'DataCipher',
  useExisting: PasswordCipher,
};
