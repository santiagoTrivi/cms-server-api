import { Module } from '@nestjs/common';
import { PasswordCipher } from './services';

@Module({
  imports: [],
  exports: [PasswordCipher],
  providers: [PasswordCipher],
})
export class AuthModule {}
