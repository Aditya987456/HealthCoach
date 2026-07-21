import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { generateReport } from "./ai.js";

dotenv.config()


const PORT = process.env.PORT || 3009;

const app = express();
app.use(cors());
app.use(express.json());



//--checking server...
app.get("/", (req, res)=>{

    res.status(200).json({
        message:"Hi from server!"
    })
})


//----- analyze chat and send ai response...
app.post("/analyze", async (req, res)=>{

    try {
        const { conversation } = req.body;
        if (!conversation) {
            return res.status(400).json({
            success: false,
            message: "Conversation is required."
        });
    }
        console.log(conversation);
    
    
        const response = await generateReport(conversation);


        //---here returning ai answer...
        return res.status(200).json({
            success: true,
            response        
        });


    } catch (error) {

        console.error("Error - ",error)
        return res.status(500).json({
            status:"failed",
            message:"Error in generating ai response."
        })
    }
})









app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})
