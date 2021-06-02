import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClubsService } from './clubs.service';
import { filterClubDto } from './Models/filterClubDto';

@Controller()
export class ClubsController {
    constructor(
        private readonly clubsService :ClubsService
    ){}
@MessagePattern('clubs/add')
async add(@Payload() clubdto ){
    return await this.clubsService.add(clubdto);
}

@MessagePattern('clubs/delete')
async delete (@Payload() clubdto ){
    return await this.clubsService.add(clubdto);
}

@MessagePattern('clubs/update')
async update(@Payload() clubdto ){
    return await this.clubsService.add(clubdto);
}

@MessagePattern('clubs/get')
async get(@Payload() clubdto ){
    return await this.clubsService.add(clubdto);
}




}
