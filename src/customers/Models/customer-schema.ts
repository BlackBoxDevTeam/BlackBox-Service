import { EntitySchema } from "typeorm";
import { Customer } from "./customer-model";

export const CustomerSchema = new EntitySchema<Customer>({
    name: "Customer",
    target:Customer,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        star: {
            type: Number,
            default: 0,
        },
       

        nationalCode:{
            type:Number,
            // length:10,
            nullable:true,
            unique: true
        },

        firstName:{
            type : String,
            nullable: true,
           
        },

        lastName:{
            type : String,
            nullable: true
        },
        point:{
            type : Number,
            nullable: true
        },

        createdAt:{
            type:Date,
            createDate:true
        },


    },
    relations:{
      club:{
          type:'many-to-one',
          target:'Club',
         eager:true
      },
      histories:{
          type:'one-to-many',
          target:'PurchaseHistory',
          inverseSide:'customer',
          eager:true,
          cascade:true,
          nullable: true
      },

      tags:{
        type:'many-to-many',
        target : 'tag',
        joinTable:true,
        inverseSide:'tags',
        eager:true,
        cascade:true
      } 

    }
})
