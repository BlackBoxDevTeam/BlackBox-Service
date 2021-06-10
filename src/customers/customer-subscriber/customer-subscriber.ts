import { InjectRepository } from '@nestjs/typeorm';
import { Club } from 'src/clubs/Models/club-model';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Repository,
    UpdateEvent,
} from 'typeorm';
import { Customer } from '../Models/customer-model';

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
        const customer = await this.customersRepository.findOne(event.entity.id);
        for (let i = 0; i < customer.club.starredPoints.length; i++) {
            if (customer.point >= customer.club.starredPoints[i]) {
                customer.star = i;
            }
        }
        this.customersRepository.save(customer);
    }
}