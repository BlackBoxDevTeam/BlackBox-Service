import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClubsService } from './clubs.service';

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
async delete (@Payload() id : number ){
    return await this.clubsService.delete(id);
}

@MessagePattern('clubs/update')
async update(@Payload() clubdto ){
    return await this.clubsService.update(clubdto);
}

@MessagePattern('clubs/get')
async get(@Payload() clubID ){
    return await this.clubsService.get(clubID);
}

@MessagePattern('clubs/tag')
async tag (@Payload() tagDto){
    return await this.clubsService.tag(tagDto);
}
}
