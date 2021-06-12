import { EntitySchema } from "typeorm";
import { tag } from "./tag-model";

export const tagSchema = new EntitySchema<any>({
    name : 'tag',
    target:tag,
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
        
        tag:{
            type:String,
            nullable:true      
        }
    },
    relations:{
        club :{
            type:'many-to-one',
            target:'Club',
           

        }
    }
  
    
})