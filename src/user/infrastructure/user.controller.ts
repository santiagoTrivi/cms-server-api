import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from '@user/application';
import { CreateUserDto } from './Dto';
//import { CreateUser } from '@user/application';

@Controller('user')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.createUser.execute(createUserDto);
  }
}
