import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { purchaseHistorySchema } from 'src/purchase-History/Models/purchase-history-schema';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { clubsSchema } from './Models/club-schema';

@Module({
 imports:[
   TypeOrmModule.forFeature([
    clubsSchema,
    
   ])
 ],
 controllers:[ClubsController],
 providers:[ClubsService]
})
export class ClubsModule {}
