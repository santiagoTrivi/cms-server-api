import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from '@user/application';
import { CreateUserDto } from './Dto';

@Controller('user')
export class UserController {
    constructor(private readonly createUser: CreateUser){

    }

    @Post()
    async create(@Body() createUser: CreateUserDto){
        return await this.createUser.execute(createUser);
    }
}
