import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubsModule } from './clubs/clubs.module';
import { CustomersModule } from './customers/customers.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      host: 'localhost',
      type: 'postgres',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClubsModule,
    CustomersModule,
    PurchaseHistoryModule
  ],
})
export class AppModule { }
