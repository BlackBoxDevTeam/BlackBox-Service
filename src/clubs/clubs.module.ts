import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tagSchema } from 'src/customers/models/tags/tag-schema';
import { purchaseHistorySchema } from 'src/purchase-history/models/purchase-history-schema';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { clubsSchema } from './models/club/club-schema';

@Module({
 imports:[
   TypeOrmModule.forFeature([
    clubsSchema,
    tagSchema
   ])
 ],
 controllers:[ClubsController],
 providers:[ClubsService]
})
export class ClubsModule {}
