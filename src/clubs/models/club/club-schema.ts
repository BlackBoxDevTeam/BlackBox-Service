import { EntitySchema } from "typeorm";
import { Club } from "./club-model";

export const  clubsSchema = new EntitySchema<Club>({
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

        purchaseRatioRuleKey: {
            type:Number,
            nullable:true,
        },

        purchaseRatioRulePoint :{
            type:Number,
            nullable:true,
        },
        purchaseDateRuleKey : {
            type:Number,
            nullable:true
        },
        purchaseDateRulePoint : {
            type:Number,
            nullable:true,
            default:0

        },

        starredPoints : {
            type:Number,
            array:true,
            nullable:true
        }
    },
    relations:{
        tags :{
            type:'one-to-many',
            target : 'tag',
            inverseSide:'club',
            eager:true
        }
    }
    
    
});