import { purchaseHistory } from "src/purchase-History/Models/purchase-history-model"

export class Club{
    id?:number
    title?:string 
    purchaseAmount:number
    pointForPurchase: number
    perviousPurchaseDistance: number
    pointsForQuickPurchase : number
    starredPoints?: number[]
}
