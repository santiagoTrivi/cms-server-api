import { BaseError } from "../baseError.abstract";
import { HttpStatus } from '@nestjs/common';

export class DtoError extends BaseError{
    public error: string | string[];
    public name = DtoError.name;
    public message: string;
    public statusCode: number;
    
    constructor(error : string | string[]){
        super();
        this.error = error;
        this.message = 'Bad request';
        this.statusCode = HttpStatus.BAD_REQUEST;
    }
}