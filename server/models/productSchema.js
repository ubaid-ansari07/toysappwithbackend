import mongoose, { Schema } from "mongoose";

const productSchema = mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.ObjectId,
        ref:'category'
    },
    brandId:{
        type:mongoose.Schema.ObjectId,
        ref:'brand'
    },
    productName:{
        type:String
    },
    productPrice:{
        type:String
    },
    productQty:{
        type:String
    },
    productDescription:{
        type:String
    },
    productImage:{
        type:String
    },
})
const Product = mongoose.model('product',productSchema);
export default Product;