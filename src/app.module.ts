import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      database: 'micro_auth',
      username: 'postgres',
      password: '4040',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
