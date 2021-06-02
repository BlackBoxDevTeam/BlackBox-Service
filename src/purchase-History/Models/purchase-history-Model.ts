import { Club } from "src/clubs/Models/clubsModel"
import { Customer } from "src/customers/Models/customersModel"

export class purchaseHistory{
    id?: number
    amount  :number
    createdAt : Date
    Customer : Customer
    Club : Club
}