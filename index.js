const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json());
let announcement=require('./groups/announcement.json')
let homeworks=require('./groups/homeworks.json')
let questionsAnswers=require('./groups/questions.json')
let randomChat=require('./groups/random-chatting.json')

//---------------------------------------------------------------------
//annoncement group
app.get('/group/announcement', (req, res)=> {
    res.json(announcement);
});
app.post('/group/announcement/addmessage', (req, res)=> {

    announcement.push(req.body)
    res.json(announcement);
});
app.put('/group/announcement/update/:id', (req, res)=> {
    announcement =announcement.find((elm)=>elm.id==req.params.id);
    //announcement.name=req.body.name;
    announcement.message=req.body.message
    res.json(announcement);
});
app.delete('/group/announcement/delete/:id',(req,res)=>{
    announcement =announcement.filter((elm=>elm.id!==parseInt(req.params.id)))
    res.json(announcement);
}
);
//------------------------------------------------------------
//homeworks group
app.get('/group/homeworks', (req, res)=> {
    res.json(homeworks);
});
app.post('/group/homeworks/addmessage', (req, res)=> {

    homeworks.push(req.body)
    res.json(homeworks);
});
app.put('/group/homeworks/update/:id', (req, res)=> {
    homeworks =homeworks.find((elm)=>elm.id==req.params.id);
    //announcement.name=req.body.name;
    homeworks.message=req.body.message
    res.json(homeworks);
});
app.delete('/group/homeworks/delete/:id',(req,res)=>{
    homeworks =homeworks.filter((elm=>elm.id!==parseInt(req.params.id)))
    res.json(homeworks);
}
);
//------------------------------------------------------------
//Questions&Answers:
app.get('/group/questions', (req, res)=> {
    res.json(questionsAnswers);
});
app.post('/group/questions/addmessage', (req, res)=> {

    questionsAnswers.push(req.body)
    res.json(questionsAnswers);
});
app.put('/group/questions/update/:id', (req, res)=> {
    questionsAnswers =questionsAnswers.find((elm)=>elm.id==req.params.id);
    //announcement.name=req.body.name;
    questionsAnswers.message=req.body.message
    res.json(questionsAnswers);
});
app.delete('/group/questions/delete/:id',(req,res)=>{
    questionsAnswers =questionsAnswers.filter((elm=>elm.id!==parseInt(req.params.id)))
    res.json(questionsAnswers);
}
);
//----------------------------------------------------------
//Random-Chatting
app.get('/group/randomchat', (req, res)=> {
    res.json(randomChat);
});
app.post('/group/randomchat/addmessage', (req, res)=> {

    randomChat.push(req.body)
    res.json(randomChat);
});
app.put('/group/randomchat/update/:id', (req, res)=> {
    randomChat =randomChat.find((elm)=>elm.id==req.params.id);
    //announcement.name=req.body.name;
    randomChat.message=req.body.message
    res.json(randomChat);
});
app.delete('/group/randomchat/delete/:id',(req,res)=>{
    randomChat =randomChat.filter((elm=>elm.id!==parseInt(req.params.id)))
    res.json(randomChat);
}
);
//------------------------------
app.listen(3000,()=>console.log("Epress Started!"));