import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { purchaseHistory } from 'src/purchase-History/Models/purchase-history-Model';

import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { ClubDto } from './Models/clubsDto';
import { Club } from './Models/clubsModel';
import { filterClubDto } from './Models/filterClubDto';

@Injectable()
export class ClubsService {
    constructor(@InjectRepository(Club)
    private clubsRepository: Repository<Club>,
   
    ) { }
    async add(dto : ClubDto) {
        return await this.clubsRepository.save(dto);
    }

    async delete(dto :  ClubDto) {
        return await this.clubsRepository.delete(dto.id);
    }

    async update(dto : ClubDto ) {
        return await this.clubsRepository.save(dto);
    }

    async get(dto : ClubDto) {
        return await this.clubsRepository.findOne(dto.id);
    }

   
}
