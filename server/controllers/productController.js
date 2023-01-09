import Product from "../models/productSchema.js";

export const list = async (req,res,next)=>{
    try {
        const productList = await Product.find().sort({_id:-1}).populate({path:'categoryId'}).populate({path:'brandId'});
        res.json({status:true,data:productList})
    } catch (error) {
        console.log(error);
    }
}

export const save = async (req,res,next)=>{
    try {
        req.body.productImage = req.file.filename;
        const brand = await Product.create(req.body);
        const data = await Product.findOne({_id:brand._id}).populate({path:'categoryId'}).populate({path:'brandId'});
        console.log(data);
        res.status(200).json({mess:"Brand Addedd successfully",status:true,data}) 
    } catch (error) {
        res.status(500).json({mess:"Oops!.. Something went wrong",status:false}) 
        console.log(error);
    }
}

export const remove = async (req,res,next)=>{
    try {
        const data =await Product.deleteOne({_id:req.params.id})
        res.status(200).json({status:true,mess:"Product deleted successfully"})
    } catch (error) {
        res.satus(500).json({status:true,mess:"Oops!.. something went wrong"})
        console.log(error);
    }
}

export const update = async (req,res,next)=>{
    try {
        await Product.updateOne({_id:req.body._id},{$set:{
            brandName:req.body.brandName,
            categoryId:req.body.categoryId
        }})
        res.status(200).json({status:true,mess:"Brand Updated successfully"});
    } catch (error) {
        console.log(error);
    }
}