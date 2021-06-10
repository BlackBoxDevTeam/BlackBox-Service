import { Club } from "src/clubs/Models/club-model"
import { purchaseHistory } from "src/purchase-History/Models/purchase-history-model"

export  class Customer{
    id?:number
    username?:string
    password?:number
    star?:number
    point? : number
    tag? : number[]
    club?: Club
    nationalCode:number
    Histories?: purchaseHistory[]
}
