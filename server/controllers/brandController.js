import Brand from "../models/brandSchema.js";
import Category from "../models/categorySchema.js";

export const list = async (req,res,next)=>{
    try {
        const categoryList = await Brand.find().sort({_id:-1}).populate({path:'categoryId'});
        res.json({status:true,data:categoryList})
    } catch (error) {
        console.log(error);
    }
}

export const save = async (req,res,next)=>{
    try {
        console.log(req.body);
        const brand = await Brand.create(req.body.obj)
        const data = await Brand.find().sort({_id:-1}).populate({path:'categoryId'})
        res.status(200).json({mess:"Brand Addedd successfully",status:true,data}) 
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (req,res,next)=>{
    try {
        const data =await Brand.deleteOne({_id:req.params.id})
        res.json({status:true,mess:"Brand deleted successfully"})
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req,res,next)=>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}