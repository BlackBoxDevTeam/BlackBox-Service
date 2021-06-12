import { Club } from "src/clubs/models/club/club-model"
import { PurchaseHistory } from "src/purchase-history/models/purchase-history-model"
import { tag } from "./tags/tag-model"

export class Customer {
    id?: number
    firstName?: string
    lastName?: string
    star?: number
    point?: number
    club?: Club
    nationalCode: number
    histories?: PurchaseHistory[]
    createdAt?: Date
    tags: tag[]
}
