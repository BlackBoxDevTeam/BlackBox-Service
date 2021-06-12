import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PurchaseHistoryDto } from './models/purchase-history-dto';
import { PurchaseHistoryFilterDto } from './models/purchase-history-filter-dto';

import { PurchaseHistoryService } from './purchase-history.service';

@Controller('purchase-history')
export class PurchaseHistoryController {
    constructor(
        private readonly purchaseHistoryService : PurchaseHistoryService
    ){}

    @MessagePattern('purchase-history/add')

     insert(@Payload() dto  : PurchaseHistoryDto){
        return this.purchaseHistoryService.insert(dto);
    }
    @MessagePattern('purchase-history/filter')
    filter(@Payload() dto :PurchaseHistoryFilterDto){
        return this.purchaseHistoryService.filterPurchases(dto);
    }
}
