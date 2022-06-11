let express=require('express');
let res = require('express/lib/response');
let app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
let saraAsultan=require('./saraAsultan.json' );
let saraAmoh=require('./saraAmoh.json' );




app.get('/private/:myid/:friendid/chat',(req,res)=>{
    res.json(saraAsultan)})

app.get('/private/:sultanid /:myid/chat',(req,res)=>{
    saraAsultan=saraAsultan.filter((elm)=>elm.chat ==req.params.chat);
    res.json(saraAsultan)});

 app.delete('/private/delete/:myid/:friendid/chat',(req,res)=>{
        saraAsultan=saraAsultan.filter((elm)=>elm.id !==req.params.id)
        res.json(saraAsultan);})
 app.delete('/private/delete/:friendid/:myid/chat',(req,res)=>{
         saraAsultan=saraAsultan.filter((elm)=>elm.id !==req.params.id)
         res.json(saraAsultan);})


//-------------------------------------------------------

app.get('/private/:myid/:mohid/messege',(req,res)=>{
    //saraAmoh=saraAmoh.filter((elm)=>elm.chat ==req.params.chat);
    res.json(saraAmoh)})

app.get('/private/:mohid /:myid/messege',(req,res)=>{
    //saraAmoh=saraAmoh.filter((elm)=>elm.chat ==req.params.chat);
    res.json(saraAmoh)});

 app.delete('/private/delete/:myid/:mohid/messege',(req,res)=>{
    saraAmoh=saraAmoh.filter((elm)=>elm.id !==req.params.id)
    res.json(saraAmoh);})
app.delete('/private/delete/:mohid/:myid/messege',(req,res)=>{
    saraAmoh=saraAmoh.filter((elm)=>elm.id !==req.params.id)
    res.json(saraAmoh);})


app.listen(3000,(err)=>{
    if(err) console.log('server is not running');
    console.log('server running on port 3000')
})