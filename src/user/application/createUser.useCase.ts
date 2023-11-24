import { DataCipher } from '@auth/domain';
import { Inject, Injectable } from '@nestjs/common';
import { User, UserDto, UserRepository } from '@user/domain';
import { UserRegistered } from '@user/domain/error/userRegistered';

@Injectable()
export class CreateUser {
  constructor(
    @Inject('UserRepository')
    readonly userRepository: UserRepository,
    @Inject('DataCipher')
    readonly passwordCipher: DataCipher,
  ) {}

  execute = async (userDto: UserDto) => {
    try {
      const { email } = userDto;

      const isRegistered = await this.userRepository.findOne({ email });

      if (isRegistered) {
        throw new UserRegistered(email);
      }

      const user = await User.create(userDto, this.passwordCipher);

      return await this.userRepository.create(user);
    } catch (error) {
      throw error;
    }
  };
}
