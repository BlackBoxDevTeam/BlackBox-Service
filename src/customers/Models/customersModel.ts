import { Club } from "src/clubs/Models/clubsModel"
import { purchaseHistory } from "src/purchase-History/Models/purchase-history-Model"

export  class Customer{
    id?:number
    username?:string
    password?:number
    star?:number
    tag? : number[]
    club?: Club
    nationalCode:number
    Histories : purchaseHistory[]
}
