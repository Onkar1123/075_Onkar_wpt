const express=require("express");
const app=express();
app.use(express.json());

const cors=require("cors");
app.use(cors());

const {createMsg,selectMsg}=require('./user');

app.get("/sm",async(req,res)=>
{
    const list=await selectMsg();
    res.json(list);
});

app.post("/cm",async(req,res)=>
{
    const msg=req.body;
    console.log(msg);
    await createMsg(msg);
});

app.listen(4000,() => console.log('server started'));