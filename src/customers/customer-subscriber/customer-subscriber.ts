import { InjectRepository } from '@nestjs/typeorm';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Repository,
    UpdateEvent,
} from 'typeorm';
import { Customer } from '../models/customer-model';

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface<Customer> {
    constructor(
        @InjectRepository(Customer)
        private customersRepository: Repository<Customer>,
        connection: Connection) {
        connection.subscribers.push(this);
    }
    listenTo() {

        return Customer
    }

    async afterUpdate(event: UpdateEvent<Customer>) {
        if (event.updatedColumns.find(x => x.propertyName === 'point')) {
            const customer = await this.customersRepository.findOne(event.entity.id);
            if (customer.club.starredPoints) {
                for (let i = 0; i < customer.club.starredPoints.length; i++) {

                    if (event.entity.point >= customer.club.starredPoints[i]) {
                        customer.star = i;
                    }
                }
                this.customersRepository.save(customer);
            }

        }
    }
}