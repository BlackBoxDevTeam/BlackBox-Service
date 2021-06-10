import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindConditions, LessThan, MoreThan, Repository } from 'typeorm';
import { CustomerFilterDto } from './models/cusotmer-filter-dto';
import { CustomersDto } from './models/customer-dto';
import { Customer } from './models/customer-model';
import { tag } from './models/tag/tag-model';


@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
    private readonly customersRepository : Repository<Customer>
    ){}

    async add(dto :CustomersDto){
        dto.tags = <any>dto.tags.map(x => ({id : x}));
        return await this.customersRepository.save(<any>dto);
    }

    async get(dto : number){
        return await this.customersRepository.findOne(dto);
    }
    
    async edit(dto : CustomersDto){
     return await this.customersRepository.save(<any>dto);
    }

    async delete(customerID : number){
        return await this.customersRepository.delete(customerID);
    }

    async filter(dto : CustomerFilterDto){
        const options :FindConditions<Customer> = {};
        if (dto.star){
            options.star = dto.star
        }
        if(dto.point){
            options.point = dto.point
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

        return await this.customersRepository.find({
            where:options
        })
    }

    
}
