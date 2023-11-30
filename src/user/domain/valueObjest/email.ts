import { UserValueObjectError } from "../error/UserValueObject.error";



export class Email{


    private value: string;

    constructor(value: string){
        this.value = value;
    }

    private static isValid = (value: string): boolean => {
        const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
        return emailRegex.test(value);
    }

    public static create =(value: string) => {
        if(!this.isValid(value)) throw new UserValueObjectError('Email Error', 'Email does not meet the requirement');

        return new Email(value);
    }

    get getValue(): string{
        return this.value;
    }
}