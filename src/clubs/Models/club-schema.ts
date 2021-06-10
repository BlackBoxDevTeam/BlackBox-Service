import { EntitySchema } from "typeorm";
import { Club } from "./club-model";

export const  clubsSchema = new EntitySchema<any>({
    name: "Club",
    target:Club,
    columns: {
        id: {
            type: Number,
            generated: true,
            primary: true
        },
        title: {
            type: String,
            nullable: true,

        },

        purchaseAmount: {
            type:Number,
            nullable:true,
        },

        pointForPurchase :{
            type:Number,
            nullable:true,
        },
        perviousPurchaseDistance : {
            type:Number,
            nullable:true
        },
        pointsForQuickPurchase : {
            type:Number,
            nullable:true
        },

        starredPoints : {
            type:Number,
            array:true,
            nullable:true
        }
    },
    
    
});