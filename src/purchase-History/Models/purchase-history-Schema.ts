import { EntitySchema } from "typeorm";
import { PurchaseHistory } from "./purchase-history-model";

export const purchaseHistorySchema = new EntitySchema<PurchaseHistory>({
    name:'PurchaseHistory',
    target:PurchaseHistory,
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
        customer:{
            type:'many-to-one',
            target:'Customer',
            inverseSide : 'histories',
            nullable: true,
            
            
        },
    }
})