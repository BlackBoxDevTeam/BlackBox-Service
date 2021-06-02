import { EntitySchema } from "typeorm";
import { Customer } from "./customersModel";

export const CustomerSchema = new EntitySchema<Customer>({
    name: "Customer",
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
        tag:{
            type: 'enum',
            enum: [0, 1, 2],
            default: [],
            array: true,
        },

        nationalCode:{
            type:Number,
            // length:10,
            nullable:true,
            unique: true
        },

        username:{
            type : String,
            nullable: true,
            unique:true
        },

        password:{
            type : Number,
            nullable: true
        }

    },
    relations:{
      club:{
          type:'many-to-one',
          target:'Club',
         
      },
      Histories:{
          type:'one-to-many',
          target:'purchaseHistory',
          inverseSide:'Customer',
          eager:true,
          cascade:true,
          nullable: true
          

      }

    }
})
