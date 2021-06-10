import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { purchaseHistory } from 'src/purchase-History/Models/purchase-history-model';

import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { ClubDto } from './Models/club-dto';
import { Club } from './Models/club-model';
import { filterClubDto } from './Models/filter-clubDto';

@Injectable()
export class ClubsService {
    constructor(@InjectRepository(Club)
    private clubsRepository: Repository<Club>,

    ) { }
    async add(dto: ClubDto) {
        try {

            return await this.clubsRepository.save(dto);
        } catch (error) {
            console.log(error)
        }
    }

    async delete(dto: ClubDto) {
        return await this.clubsRepository.delete(dto.id);
    }

    async update(dto: ClubDto) {
        return await this.clubsRepository.save(dto);
    }

    async get(dto: ClubDto) {
        return await this.clubsRepository.findOne(dto.id);
    }


}
