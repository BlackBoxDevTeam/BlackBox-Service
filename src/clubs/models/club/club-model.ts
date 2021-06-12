import { tag } from "src/customers/models/tags/tag-model"
import { PurchaseHistory } from "src/purchase-history/models/purchase-history-model"

export class Club{
    id?:number
    title?:string 
    purchaseRatioRuleKey:number
    purchaseRatioRulePoint: number
    purchaseDateRuleKey: number
    purchaseDateRulePoint : number
    starredPoints?: number[]
    tags : tag[]
}
