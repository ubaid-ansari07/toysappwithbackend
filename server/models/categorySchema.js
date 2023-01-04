import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String
    }
})
const Category = mongoose.model('category',categorySchema);
export default Category;