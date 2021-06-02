import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { purchaseHistorySchema } from 'src/purchase-History/Models/purchase-history-Schema';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { clubsSchema } from './Models/clubsSchema';

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
