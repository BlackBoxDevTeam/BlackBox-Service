import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { runInThisContext } from 'vm';
import { CustomersService } from './customers.service';
import { customersDto } from './Models/customersDto';

@Controller()
export class CustomersController {
    constructor(
        private readonly customersService: CustomersService
    ) { }

    @MessagePattern('customers/add')
    add(@Payload() dto: customersDto) {
        return this.customersService.add(dto);
    }

    @MessagePattern('customers/get')
    get(@Payload() dto: customersDto) {
        return this.customersService.get(dto);
    }

}