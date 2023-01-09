import Brand from "../models/brandSchema.js";
import Category from "../models/categorySchema.js";

export const list = async (req,res,next)=>{
    try {
        const categoryList = await Category.find();
        res.json({status:true,data:categoryList})
    } catch (error) {
        console.log(error);
    }
}

export const save = async (req,res,next)=>{
    try {
        const data = await Category.create(req.body.obj)
        res.json({status:true,data}) 
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (req,res,next)=>{
    try {
        const data =await Category.deleteOne({_id:req.params.id})
        const br = await Brand.deleteMany({categoryId:req.params.id});
        res.json({status:true,mess:"Category deleted successfully"})
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req,res,next)=>{
    try {
         await Category.updateOne({_id:req.body.id},{$set:{categoryName:req.body.categoryName}})
         return res.status(200).json({mess:"Category Updated successfully...",status:true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess:"Internal server error...",status:false})
    }
}