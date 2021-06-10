import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { customersDto } from './Models/customer-dto';
import { Customer } from './Models/customer-model';


@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
    private readonly customersRepository : Repository<Customer>
    ){}

    async add(dto :customersDto){
        return await this.customersRepository.save(<any>dto);
    }

    async get(dto :customersDto){
        return await this.customersRepository.find({id:dto.id});
    }
}
