import { BaseError } from '@common/domain';
import { User } from '../user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UserRegistered extends BaseError {
  public statusCode = HttpStatus.BAD_REQUEST;
  public error = 'User registered';
  public name = UserRegistered.name;
  public message = 'User already registered';

  constructor(email: string) {
    super();
    this.error = email ? `${this.message} with email: ${email}` : this.error;
  }
}
