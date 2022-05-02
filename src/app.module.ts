import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      database: 'micro_auth',
      username: 'postgres',
      password: '4040',
      entities: ['dist/**/*.entity.{ts, js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
