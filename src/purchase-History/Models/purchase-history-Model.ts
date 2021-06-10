import { Customer } from "src/customers/models/customer-model"

export class PurchaseHistory{
    id?: number
    amount  :number
    createdAt ?: Date
    pointsPurchase?: number
    pointsQuickPurchase?:number
    customer :Customer
}