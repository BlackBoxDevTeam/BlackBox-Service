import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clubsSchema } from 'src/clubs/Models/clubsSchema';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerSchema } from './Models/customersSchema';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      CustomerSchema,
      clubsSchema
    ])
  ],
  controllers:[CustomersController],
  providers:[CustomersService]
})
export class CustomersModule {}
