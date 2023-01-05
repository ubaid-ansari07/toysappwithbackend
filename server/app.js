import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import brandRoutes from './routes/brandRoutes.js'
const app= express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://ubaid_mern:izzaLbqGOr1Ze5D3@cluster0.ejtuxti.mongodb.net/reacttoysapp?retryWrites=true&w=majority',err=>{
    if(err)
        console.log(err);
    else
        {
            console.log("Connected to database");

            app.use('/category',categoryRoutes)
            app.use('/brand',brandRoutes)
           app.listen(8000,()=>{
            console.log("Server started...");
           })
        }
})

