import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagDto } from 'src/customers/models/tags/tag-dto';
import { tag } from 'src/customers/models/tags/tag-model';
import { PurchaseHistory } from 'src/purchase-history/models/purchase-history-model';

import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { ClubDto } from './models/club/club-dto';
import { Club } from './models/club/club-model';


@Injectable()
export class ClubsService {
    constructor(@InjectRepository(Club)
    private clubsRepository: Repository<Club>,
    @InjectRepository(tag)
    private tagsRepository: Repository<tag>

    ) { }
    async add(dto: ClubDto) {
        try {

            return await this.clubsRepository.save(<any>dto);
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id : number) {
        return await this.clubsRepository.delete(id);
    }

    async update(dto: ClubDto) {
        return await this.clubsRepository.save(<any>dto);
    }

    async get(id : number) {
        return await this.clubsRepository.findOne(id);
    }

    async tag(tag : TagDto){
        return await this.tagsRepository.save(<any>tag);
    }

}
