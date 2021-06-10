import { EntitySchema } from "typeorm";
import { purchaseHistory } from "./purchase-history-model";

export const purchaseHistorySchema = new EntitySchema<purchaseHistory>({
    name:'purchaseHistory',
    target:purchaseHistory,
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

        pointsPurchase:{
            type:Number,
            nullable:true
        },
        pointsQuickPurchase:{
            type:Number,
            nullable:true
        }
        
    },
    relations:{
        Customer:{
            type:'many-to-one',
            target:'Customer',
            inverseSide : 'Histories',
            nullable: true,
           
            
        },
    }
})