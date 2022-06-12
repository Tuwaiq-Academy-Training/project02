const express = require('express');
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let ann=require('./Group-chatting/announcements.json');
let home = require('./Group-chatting/homeworks.json');
let qa = require('./Group-chatting/q-and-a.json');
let chat = require('./Group-chatting/random-chatting.json');
let pri=require('./Group-chatting/privatechat.json');


//announcements=>
app.get('/announcements/info',(req, res) => {
    res.json(ann);
    });
    app.post('/announcements/create/:name/:msg',(req, res)=>{
        announcements.push(req.body.params.name, req.body.params.msg);
        res.json(announcements);
    })
    app.delete('/announcements/delete/:name',(req, res)=>{
        announcements= announcements.filter((element)=>element.name!==req.params.name);
        res.json(announcements);
    })
    
    app.put('/announcements/update/:name',(req, res)=>{
        let user=announcements.find((element)=>element.name==req.params.name);
        user.age=req.body.name;
        res.json(announcements);
    })

    //homeworks
    app.get('/homeworkes/info',(req, res) => {
        res.json(home);
        });
        app.post('/homeworkes/create/:hw/',(req, res)=>{
            homeworkes.push(req.body.params.hw);
            res.json(homeworkes);
        })
        app.delete('/homeworkes/delete/:hw',(req, res)=>{
            homeworkes= homeworkes.filter((element)=>element.hw!==req.params.hw);
            res.json(homeworkes);
        })
        
        app.put('/homeworkes/update/:hw',(req, res)=>{
            let home=homeworkes.find((element)=>element.hw==req.params.hw);
            home.homeworkes=req.body.hw;
            res.json(homeworkes);
        })

//q-and-a
app.get('/q-and-a/info',(req, res) => {
    res.json(qa);
    });
    app.post('/q-and-a/create/:hw/',(req, res)=>{
        qa.push(req.body.params.hw);
        res.json(qa);
    })
    app.delete('/q-and-a/delete/:hw',(req, res)=>{
        qa = qa.filter((element)=>element.hw!==req.params.hw);
        res.json(qa);
    })
    
    app.put('/q-and-a/update/:hw',(req, res)=>{
        let home=q-and-a.find((element)=>element.hw==req.params.hw);
        home.qa =req.body.hw;
        res.json(q-and-a);
    })
//random chatting
app.get('/randomchat/info',(req, res) => {
    res.json(chat);
    });
    app.post('/randomchat/create/:chat/',(req, res)=>{
        randomchat.push(req.body.params.chat);
        res.json(chat);
    })
    app.delete('/randomchat/delete/:chat',(req, res)=>{
        randomchat= randomchat.filter((element)=>element.chat!==req.params.chat);
        res.json(chat);
    })
    
    app.put('/randomchat/update/:chat',(req, res)=>{
        let ran=randomchat.find((element)=>element.chat==req.params.chat);
        ran.randomchat=req.body.chat;
        res.json(chat);
    })

    //private chatting
    app.get('/privatchat/info/:name/:to',(req, res) => {
        if (req.params.to!==chat){
            res.send(` ${req.body.to}thiis chat is private`);
       }
        privatchat.find((element)=>element.name&&element.to==req.params.name&&element.params.to);
        res.json(chat);
        });
        app.post('/privatchat/create/:name/:to/:msg',(req, res)=>{
            if (req.params.to!==chat){
                res.send(` ${req.body.to}thiis chat is private`);
           }
            privatchat.find((element)=>element.name&&element.to==req.params.name&&element.params.to);
            privatchat.push(req.body.params.name,req.body.params.to);
            res.json(chat);
        })
        app.delete('/privatchat/delete/:name/:to',(req, res)=>{
            if (req.params.to!==chat){
                res.send(` ${req.body.to}thiis chat is private`);
           }
            privatchat.find((element)=>element.name&&element.to==req.params.name&&element.params.to);
            privatchat= privatchat.filter((element)=>element.hw!==req.params.hw);
            res.json(chat);
        })
        
        app.put('/privatchat/update/:name/:to/:msg',(req, res)=>{
            if (req.params.to!==chat){
                res.send(` ${req.body.to}thiis chat is private`);
           }
            privatchat.find((element)=>element.name&&element.to&element.msg==req.params.name&&element.params.to&element.msg);
            let update=privatchat.find((element)=>element.name&&element.to&&element.msg==req.params.name&&req.params.to&&req.params.msg);
            update.privatchat=req.body.msg;
            res.json(chat);
        })




app.listen(3001,()=>console.log('express started '));