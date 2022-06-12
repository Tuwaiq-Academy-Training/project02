const express = require('express');
const app = express();
let announcements = require('./announcements.json');
let homeworks = require('./homeworks.json');
let qanda = require('./qanda.json');
let random = require('./random.json');
let privateChat = require('./privateChat.json');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

//announcements Group
app.get('/api/Gchats/announcements/view',(req, res) => {
    res.json(announcements);
    });
app.post('/api/Gchats/announcements/send/:name',(req,res) =>{
    let mID = 0;
    let message = {
        "mID": mID++,
        "senderName": req.params.name,
        "messages": req.body,
    };
    announcements.push(message);
    res.json(announcements);
    });
app.delete('/api/Gchats/announcements/delete/:ID',(req,res)=>{
    announcements = announcements.filter((elm)=> elm.mID !== req.params.ID);
    res.json(announcements);
    });        
app.put('/api/Gchats/announcements/edit/:ID',(req,res)=>{
    let m = announcements.find((elm)=>elm.mID == req.params.ID)
    m.messages = req.body.messages;
    res.json(announcements);
    });    

//homeworks Group
app.get('/api/Gchats/homeworks/view',(req, res) => {
    res.json(homeworks);
    });
app.post('/api/Gchats/homeworks/send/:name',(req,res) =>{
    let mID = 0;
    let message = {
        "mID": mID++,
        "senderName": req.params.name,
        "messages": req.body,
    };
    homeworks.push(message);
    res.json(homeworks);
    });
app.delete('/api/Gchats/homeworks/delete/:ID',(req,res)=>{
    homeworks = homeworks.filter((elm)=> elm.mID !== req.params.ID);
    res.json(homeworks);
    });        
app.put('/api/Gchats/homeworks/edit/:Id',(req,res)=>{
    let m = homeworks.find((elm)=>elm.mID == req.params.ID)
    m.messages = req.body.messages;
    res.json(homeworks);
    }); 

//q-and-a Group
app.get('/api/Gchats/q-and-a/view',(req, res) => {
    res.json(qanda);
    });
app.post('/api/Gchats/q-and-a/send/:name',(req,res) =>{
    let mID = 0;
    let message = {
        "mID": mID++,
        "senderName": req.params.name,
        "messages": req.body,
    };
    qanda.push(message);
    res.json(qanda);
    });
app.delete('/api/Gchats/q-and-a/delete/:ID',(req,res)=>{
        qanda = qanda.filter((elm)=> elm.mID !== req.params.ID);
    res.json(qanda);
    });        
app.put('/api/Gchats/q-and-a/edit/:ID',(req,res)=>{
    let m = qanda.find((elm)=>elm.mID == req.params.ID)
    m.messages = req.body.messages;
    res.json(qanda);
    }); 

//random-chatting Group
app.get('/api/Gchats/randomchatting/view',(req, res) => {
    res.json(random);
    });
app.post('/api/Gchats/randomchatting/send/:name',(req,res) =>{
    let mID = 0;
    let message = {
        "mID": mID++,
        "senderName": req.params.name,
        "messages": req.body,
    };
    random.push(message);
    res.json(random);
    });
app.delete('/api/Gchats/randomchatting/delete/:ID',(req,res)=>{
    random = random.filter((elm)=> elm.mID !== req.params.ID);
    res.json(random);
    });        
app.put('/api/Gchats/randomchatting/edit/:ID',(req,res)=>{
    let m = random.find((elm)=>elm.mID == req.params.ID)
    m.messages = req.body.messages;
    res.json(random);
    }); 

//private chat
app.get('/api/privatechat/view/:name1/:name2',(req, res) => {
    let n1=req.params.name1;
    let n2=req.params.name2;
    let chatName = n1+n2; 
    let chatName2 = n2+n1;
    let arr=[];
    if(chatName ==privateChat.cname && chatName2 ==privateChat.cname2){
        let m = privateChat.find((elm)=>elm.cname == n1);
     arr.push(m);
        res.send(arr);
    }
    });
app.post('/api/privatechat/send/:name1/:name2',(req,res) =>{
    let n1=req.params.name1;
    let n2=req.params.name2;
    let chatName = n1+n2; 
    let chatName2 = n2+n1;
    let mID = 0;
        let message = {
            "cname":chatName,
            "cname2":chatName2,
            "mID": mID++,
            "senderName": req.params.name1,
            "messages": req.body,
        };
        privateChat.push(message);
        
    });
app.delete('/api/privatechat/delete/:name1/:name2',(req,res)=>{
    let n1=req.params.name1;
    let n2=req.params.name2;
    let chatName = n1+n2; 
    let chatName2 = n2+n1;
    privateChat = random.filter((elm)=> elm.cname !== chatName && elm.cname2 !== chatName2);
    res.json(privateChat);
    });        
app.put('/api/privatechat/edit/:name1/:name2/:ID',(req,res)=>{
    let n1=req.params.name1;
    let n2=req.params.name2;
    let chatName = n1+n2; 
    let chatName2 = n2+n1;
    if(chatName ==privateChat.cname && chatName2 ==privateChat.cname2){
    let m = privateChat.find((elm)=>elm.mID == req.params.ID)
    m.messages = req.body.messages;
    res.json(privateChat);}
    });     

app.listen(3000);