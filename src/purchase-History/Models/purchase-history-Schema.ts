import { EntitySchema } from "typeorm";
import { purchaseHistory } from "./purchase-history-Model";

export const purchaseHistorySchema = new EntitySchema<purchaseHistory>({
    name:'purchaseHistory',
    columns:{
        id:{
            type:Number,
            generated:true,
            primary:true
        },
        amount:{
            type:Number
        },
        createdAt:{
            type:Date,
            createDate:true
        },
        
    },
    relations:{
        Customer:{
            type:'many-to-one',
            target:'Customer',
            inverseSide : 'Histories',
            nullable: true,
           
            
        },

        Club:{
            type:'many-to-one',
            target:"Club",
            inverseSide:'PurchaseRecords',
            nullable:true
        }
    }
})