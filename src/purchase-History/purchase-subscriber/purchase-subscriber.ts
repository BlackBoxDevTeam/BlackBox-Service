import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { Club } from 'src/clubs/models/club/club-model';
import { Customer } from 'src/customers/models/customer-model';
import { PassThrough } from 'stream';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Repository,
} from 'typeorm';
import { PurchaseHistory } from '../models/purchase-history-model';

@EventSubscriber()
export class PurchaseSubscribe implements EntitySubscriberInterface<PurchaseHistory> {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        @InjectRepository(Club)
        private clubsRepository: Repository<Club>,
        @InjectRepository(PurchaseHistory)
        private purchaseRepository: Repository<PurchaseHistory>,
        connection: Connection
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return PurchaseHistory
    }




    async afterInsert(event: InsertEvent<PurchaseHistory>) {


        let point = 0;
        const customer = await this.customerRepository.findOne(event.entity.customer);
        if (customer.club.purchaseAmount && customer.club.pointForPurchase && customer.club.purchaseAmount <= event.entity.amount) {

            point = parseInt(<any>(event.entity.amount / customer.club.purchaseAmount)) * customer.club.pointForPurchase
           
        }
        if (customer.club.perviousPurchaseDistance && customer.club.pointsForQuickPurchase) {
            let getLastPurchase = await this.purchaseRepository.findOne({
                where: { customer: event.entity.customer },
                order: { createdAt: 'DESC' },
            })
            const lastPurchase: any = new Date(getLastPurchase.createdAt);
            const nowPurchase: any = new Date();
            const diffTime = Math.abs(nowPurchase - lastPurchase);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
            if (diffDays == customer.club.perviousPurchaseDistance) point += customer.club.pointsForQuickPurchase;
        }    
        customer.point += point
        await this.customerRepository.save(customer);
    }
}