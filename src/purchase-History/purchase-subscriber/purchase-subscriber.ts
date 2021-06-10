import { InjectRepository } from '@nestjs/typeorm';
import { Club } from 'src/clubs/Models/club-model';
import { Customer } from 'src/customers/Models/customer-model';
import { PassThrough } from 'stream';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Repository,
} from 'typeorm';
import { purchaseHistory } from '../Models/purchase-history-model';

@EventSubscriber()
export class PurchaseSubscribe implements EntitySubscriberInterface<purchaseHistory> {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        @InjectRepository(Club)
        private clubsRepository: Repository<Club>,
        @InjectRepository(purchaseHistory)
        private purchaseRepository: Repository<purchaseHistory>,
        connection: Connection
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return purchaseHistory
    }




    async afterInsert(event: InsertEvent<purchaseHistory>) {


        let point = 0;
        const customer = await this.customerRepository.findOne(event.entity.Customer);
        if (customer.club.purchaseAmount && customer.club.pointForPurchase && customer.club.purchaseAmount <= event.entity.amount) {
            point += customer.club.pointForPurchase;
        }
        if (customer.club.perviousPurchaseDistance && customer.club.pointsForQuickPurchase) {
            let getLastPurchase = await this.purchaseRepository.findOne({
                where: { Customer: event.entity.Customer },
                order: { createdAt: 'DESC' },
            })
            const lastPurchase: any = new Date(getLastPurchase.createdAt);
            const nowPurchase: any = new Date();
            const diffTime = Math.abs(nowPurchase - lastPurchase);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
            if (diffDays == customer.club.perviousPurchaseDistance) point += customer.club.pointsForQuickPurchase;
            customer.point += point
            await this.customerRepository.save(customer);
        }

    }
}