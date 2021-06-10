import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { runInThisContext } from 'vm';
import { CustomersService } from './customers.service';
import { CustomerFilterDto } from './models/cusotmer-filter-dto';
import { CustomersDto } from './models/customer-dto';

@Controller()
export class CustomersController {
    constructor(
        private readonly customersService: CustomersService
    ) { }

    @MessagePattern('customers/add')
    add(@Payload() dto: CustomersDto) {
        return this.customersService.add(dto);
    }

    @MessagePattern('customers/get')
    get(@Payload() customerID) {
        return this.customersService.get(customerID);
    }

    @MessagePattern('customers/delete')
    delete (@Payload() id : number){
        return this.customersService.delete(id)
    }

    @MessagePattern('customers/update')
    edit(@Payload() dto : CustomersDto){
        return this.customersService.edit(dto);
    }

    @MessagePattern('customers/filter')
    filter(@Payload() dto : CustomerFilterDto){
    return this.customersService.filter(dto);    
    }

}