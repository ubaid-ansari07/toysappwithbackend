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
        
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (req,res,next)=>{
    try {
        await Category.deleteOne({_id:req.params.id})
    } catch (error) {
        console.log(error);
    }
}