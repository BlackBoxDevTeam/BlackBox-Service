import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clubsSchema } from 'src/clubs/models/club/club-schema';
import { CustomerSubscriber } from './customer-subscriber/customer-subscriber';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerSchema } from './models/customer-schema';
import { tagSchema } from './models/tags/tag-schema';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      CustomerSchema,
      clubsSchema,
      tagSchema
    ])
  ],
  controllers:[CustomersController],
  providers:[CustomersService,CustomerSubscriber]
})
export class CustomersModule {}
