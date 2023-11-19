import { PasswordCipher } from "./passwordCipher";

export const PasswordCipherConfig = {
    provide: 'DataCipher',
    useExisting: PasswordCipher,
}