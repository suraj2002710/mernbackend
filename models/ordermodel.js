const mongoose=require('mongoose')
const obj={
    shipinginfo:{
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },
        phoneNo:{
            type:Number,
            required:true
        },
       
    },
    orderItems:[{
        name:{
            type:String,
            required:true
        },price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        
        image:{
            type:String,
            required:true
        },
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            required:true
        },
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    paymentInfo:{
        id:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        },
    },
        paidat:{
            type:Date,
            required:true
        },
        itemprice:{
            type:Number,
            required:true,
            default:0
        },
        taxprice:{
            type:Number,
            required:true,
            default:0
        },
        shippingprice:{
            type:Number,
            required:true,
            default:0
        },
        totalprice:{
            type:Number,
            required:true,
            default:0
        },
        orderstatus:{
            type:String,
            required:true,
            default:"processing"
        },
        deliveredat:Date,
        createdat:{
            type:Date,
            required:true,
            default:Date.now
        }
}
const schema=new mongoose.Schema(obj)
const model=new mongoose.model("order",schema)

module.exports=model