import { Club } from "src/clubs/Models/club-model"
import { Customer } from "src/customers/Models/customer-model"

export class purchaseHistory{
    id?: number
    amount  :number
    createdAt ?: Date
    pointsPurchase?: number
    pointsQuickPurchase?:number
    Customer : Customer
}