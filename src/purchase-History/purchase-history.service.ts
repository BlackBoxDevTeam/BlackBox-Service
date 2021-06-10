import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { purchaseHistoryDto } from './Models/purchase-history-dto';
import { purchaseHistoryFilterDto } from './Models/purchase-history-filter-dto';
import { purchaseHistory } from './Models/purchase-history-model';

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

        if (dto.amount) {
            options.amount = MoreThan(dto.amount)
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
