import mongoose from "mongoose";
const brandSchema = mongoose.Schema({
    brandName:{
        type : String
    },
    categoryId : {
        type : mongoose.Schema.ObjectId,
        ref : 'category'
    }
})
const Brand = mongoose.model('brand',brandSchema);
export default Brand