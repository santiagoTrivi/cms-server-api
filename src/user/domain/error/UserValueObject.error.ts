import { BaseError } from "@common/domain";
import { HttpStatus } from "@nestjs/common";


export class UserValueObjectError extends BaseError{
    public error: string | string[];
    public name = UserValueObjectError.name;
    public message: string;
    public statusCode = HttpStatus.BAD_REQUEST;


    constructor(error: string, message: string){
        super();
        this.error = error;
        this.message = message;
    }
    
}