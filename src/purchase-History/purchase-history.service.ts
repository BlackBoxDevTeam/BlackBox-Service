import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { purchaseHistoryDto } from './Models/purchase-history-Dto';
import { purchaseHistoryFilterDto } from './Models/purchase-history-filter-Dto';
import { purchaseHistory } from './Models/purchase-history-Model';

@Injectable()
export class PurchaseHistoryService {
    constructor(
        @InjectRepository(purchaseHistory)
        private purchaseHistoryRepository: Repository<purchaseHistory>
    ) { }
    insert(dto: purchaseHistoryDto) {
        return this.purchaseHistoryRepository.save(<any>dto);
    }

    async filterPurchases(dto: purchaseHistoryFilterDto) {
        const options: FindConditions<purchaseHistory> = {}
        if (dto.Customer) {
            options.Customer = <any>dto.Customer
        }

        if(dto.amount){
            options.amount = MoreThan(dto.amount)
        }

        if (dto.id) {
            options.Club = <any>dto.id;
        }

        if (dto.fromDate && dto.toDate == null) {
            options.createdAt = MoreThan(dto.fromDate);
        }
        if (dto.toDate && dto.fromDate == null) {
            options.createdAt = LessThan(dto.toDate);
        }

        if (dto.toDate && dto.fromDate) {
            options.createdAt = Between(dto.fromDate, dto.toDate);
        }


        return await this.purchaseHistoryRepository.find({
            where: options,

        });
    }
}
