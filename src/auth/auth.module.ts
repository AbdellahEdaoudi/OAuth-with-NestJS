import { Module } from '@nestjs/common';
import { AuthController, ClientHomePage } from './auth.controller';
import { GoogleStrategy } from './startegy/google.startegy';
import { AuthService } from './auth.service';
import { usersProviders } from 'src/users/users.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AuthController,ClientHomePage],
  providers:[...usersProviders,GoogleStrategy,AuthService]
})
export class AuthModule {}
