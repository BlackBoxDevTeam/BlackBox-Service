import { tag } from "src/customers/models/tag/tag-model"
import { PurchaseHistory } from "src/purchase-History/models/purchase-history-model"

export class Club{
    id?:number
    title?:string 
    purchaseAmount:number
    pointForPurchase: number
    perviousPurchaseDistance: number
    pointsForQuickPurchase : number
    starredPoints?: number[]
    tags : tag[]
}
