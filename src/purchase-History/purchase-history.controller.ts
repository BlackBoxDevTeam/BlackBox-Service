import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { purchaseHistoryDto } from './Models/purchase-history-Dto';
import { purchaseHistoryFilterDto } from './Models/purchase-history-filter-Dto';
import { PurchaseHistoryService } from './purchase-history.service';

@Controller('purchase-history')
export class PurchaseHistoryController {
    constructor(
        private readonly PurchaseHistoryService : PurchaseHistoryService
    ){}

    @MessagePattern('purchase-history/add')

     insert(@Payload() dto  : purchaseHistoryDto){
        return this.PurchaseHistoryService.insert(dto);
    }
    @MessagePattern('purchase-history/filter')
    filter(@Payload() dto :purchaseHistoryFilterDto){
        return this.PurchaseHistoryService.filterPurchases(dto);
    }
}
