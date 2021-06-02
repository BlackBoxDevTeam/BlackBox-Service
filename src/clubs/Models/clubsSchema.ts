import { EntitySchema } from "typeorm";

export const  clubsSchema = new EntitySchema<any>({
    name: "Club",
    columns: {
        id: {
            type: Number,
            generated: true,
            primary: true
        },
        title: {
            type: String,
            nullable: true
        },
    },
    relations:{
        PurchaseRecords:{
            type:'one-to-many',
            target:'purchaseHistory',
            inverseSide:'Club',
            nullable:true
        }
    }
});