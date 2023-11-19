import { UserDto } from "@user/domain";
import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateUserDto implements UserDto {

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsString()
    profileImg: string;
    
}