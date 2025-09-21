import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // パスワードなしの場合
      database: 'todo_app',
      autoLoadEntities: true,
      synchronize: true, // 開発中のみ
    }),
  ],
})
export class AppModule {}
