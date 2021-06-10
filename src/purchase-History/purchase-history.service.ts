import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { PurchaseHistoryDto } from './models/purchase-history-dto';
import { PurchaseHistoryFilterDto } from './models/purchase-history-filter-dto';

import { PurchaseHistory } from './models/purchase-history-model';

@Injectable()
export class PurchaseHistoryService {
    constructor(
        @InjectRepository(PurchaseHistory)
        private purchaseHistoryRepository: Repository<PurchaseHistory>
    ) { }
    insert(dto: PurchaseHistoryDto) {
        return this.purchaseHistoryRepository.save(<any>dto);
    }

    async filterPurchases(dto: PurchaseHistoryFilterDto) {
        const options: FindConditions<PurchaseHistory> = {}
        if (dto.customer) {
            options.customer = <any>dto.customer
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
