import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clubsSchema } from 'src/clubs/Models/club-schema';
import { CustomerSchema } from 'src/customers/Models/customer-schema';
import { purchaseHistorySchema } from './Models/purchase-history-schema';
import { PurchaseHistoryController } from './purchase-history.controller';
import { PurchaseHistoryService } from './purchase-history.service';
import { PurchaseSubscribe } from './purchase-subscriber/purchase-subscriber';

@Module({
 imports:[
   TypeOrmModule.forFeature([
    purchaseHistorySchema,
    clubsSchema,
    CustomerSchema
   ])
 ],
 controllers:[PurchaseHistoryController],
 providers:[PurchaseHistoryService,PurchaseSubscribe]

})
export class PurchaseHistoryModule {}
