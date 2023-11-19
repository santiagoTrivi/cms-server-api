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
    readonly passwordCipher: DataCipher
  ) {}

  execute = async (userDto: UserDto) => {
    const { email, firstName, lastName, password, profileImg } = userDto;

    const isRegistered = true //await this.userRepository.findby({ email });

    if (isRegistered) {
      throw new UserRegistered(email);
    }

    const user = await User.createInstance(
      { email, firstName, lastName, password, profileImg },
      this.passwordCipher,
    );
    
    return await this.userRepository.create(user);
    
  };
  
}
