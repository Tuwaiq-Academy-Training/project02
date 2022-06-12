const express = require('express');
const app = express();
let announcement=require('./announcements.json');
let homework=require('./homeworks.json');
let help=require('./q-and-a.json');
let roomchat=require('./random-chatting.json');
let privetmessage=require("./privateMessage.json");

app.use(express.json());

app.post('/private/:myId/:frindId',(req,res)=>{

     // privetmessage.push(req.body);
       res.json(privetmessage);
      
});

//--------------------------------------------------------------------
app.get('/announcement/users'),(req,res)=>{
    res.json(announcement);
    announcement.push(req.body);
}
  app.get('/homework/users'),(req,res)=>{
    res.json(homework);
    homework.push(req.body);
  }
 
    app.get('/q-and-a/users'),(req,res)=>{
    res.json(help);
    help.push(req.body);}
  
    app.get('/roomchat/users'),(req,res)=>{
    res.json(roomchat);
    roomchat.push(req.body);
}
//------------------------------------------------------------------
app.post('/announcement/user/create',(req,res)=>{
    announcement.push(req.body);
     res.json(announcement);
});

 app.post('/homework/user/create',(req,res)=>{
     homework.push(req.body);
     res.json(homework);
 });

 app.post('/q-and-a/user/create',(req,res)=>{
     help.push(req.body);
     res.json(help);});

 app.post('/roomchat/user/create',(req,res)=>{
     roomchat.push(req.body);
     res.json(roomchat);
  
});
 //------------------------------------------------------------------
app.delete('/announcement/user/delete/:name',(req,res)=>{
    announcement=announcement.filter((elm)=> elm.name !== req.params.name)
    res.json(announcement);
});

app.delete('/homework/user/delete/:name',(req,res)=>{
    homework=homework.filter((elm)=>elm.name !== req.params.name)
    res.json(homework);});

 app.delete('/q-and-a/user/delete/:name',(req,res)=>{
    help=help.filter((elm)=>elm.name !== req.params.name)
    res.json(help);});

 app.delete('/roomchat/user/delete/:name',(req,res)=>{
    roomchat=roomchat.filter((elm)=>elm.name !== req.params.name)
    res.json(roomchat);

});
//--------------------------------------------------------------------------
app.put('/announcement/update/:id',(req,res)=>{
   announcement=announcement.find((elm)=>elm.id==req.params.id)
   announcement.message=req.body.message;
   res.json(announcement);});

app.put('/homework/update/:id',(req,res)=>{
   homework=homework.find((elm)=>elm.id == req.params.id)
   homework.homeworks=req.body.homeworks;
   res.json(homework);});

app.put('/q-and-a/update/:id',(req,res)=>{
   help=help.find((elm)=>elm.id == req.params.id)
   help.qanda=req.body.qanda;
   res.json(help);});

app.put('/roomchat/update/:id',(req,res)=>{
   roomchat=roomchat.find((elm)=>elm.id == req.params.id)
  roomchat.roomchats=req.body.roomchats;
   res.json(roomchat);

});
app.listen(3000,()=>console.log('exprexx started')); 
