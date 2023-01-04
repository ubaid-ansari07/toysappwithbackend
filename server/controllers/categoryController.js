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
        console.log(req.params.id);
        await Category.deleteOne({_id:req.params.id})
        res.json({status:true,mess:"Category deleted successfully"})
    } catch (error) {
        console.log(error);
    }
}