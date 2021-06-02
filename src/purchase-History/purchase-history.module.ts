import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clubsSchema } from 'src/clubs/Models/clubsSchema';
import { purchaseHistorySchema } from './Models/purchase-history-Schema';
import { PurchaseHistoryController } from './purchase-history.controller';
import { PurchaseHistoryService } from './purchase-history.service';

@Module({
 imports:[
   TypeOrmModule.forFeature([
    purchaseHistorySchema,
    clubsSchema
   ])
 ],
 controllers:[PurchaseHistoryController],
 providers:[PurchaseHistoryService]

})
export class PurchaseHistoryModule {}
