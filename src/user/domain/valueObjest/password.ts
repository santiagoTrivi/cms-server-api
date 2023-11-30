import { DataCipher } from "@auth/domain";
import { UserValueObjectError } from "../error/UserValueObject.error";


export class Password {

    private value: string | undefined;


    constructor(value?: string){
        this.value = value ? value : undefined;
    }


    private static hashPassword = async (value: string, cipher: DataCipher) => {
    
        return await cipher.hash(value);
    }


    private static isValid = (value:string): boolean => {
        const regex = new RegExp('^(?=(?:.*[A-Z]){3})(?=(?:.*[a-z]){3})(?=(?:.*[0-9]){2})(?=.*[!@#$*])(?!.*(.)\x01).*$');
        return regex.test(value)
    }


    private static isAppropiateLen = (value: string): boolean => {
        const minLength = 8;
        return value.length >= minLength;
    }

    public static create = async (value: string, dataCipher: DataCipher) => {

        if(!this.isAppropiateLen(value)){
            throw new UserValueObjectError('Password Error', 'password does not meet the requirement [8 chars length min]');
        }

        if(!this.isValid(value)){
            throw new UserValueObjectError('Password Error', 'password does not meet the requirement [at least 3 capital letters, at least 3 lowercase letters, at least 3 lowercase letters]');
        }

        const hashed = await this.hashPassword(value, dataCipher);
        return new Password(hashed);

    }

    get getValue(): string{
        return this.value
    }



} 