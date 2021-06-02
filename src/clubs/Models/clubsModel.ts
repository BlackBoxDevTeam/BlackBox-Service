import { purchaseHistory } from "src/purchase-History/Models/purchase-history-Model"

export class Club{
    id?:number
    title?:string 
    PurchaseRecords: purchaseHistory[]
}
