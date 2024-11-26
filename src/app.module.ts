import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [DatabaseModule,ConfigModule.forRoot(),AuthModule],
})

export class AppModule {}
