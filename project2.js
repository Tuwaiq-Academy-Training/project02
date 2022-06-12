const express = require('express');
let announcements = require('./announcements.json');
let homeworks = require('./homeworks.json');
let q_and_a = require('./q_and_a.json');
let random_chatting= require('./random_chatting.json')

const project = express()
project.use(express.urlencoded({extended:false}));
 project.use(express.json());
 
//announcements messages and send to it, update,delete messages
    project.get('/api/announcements/create', (req, res)=>{
         announcements.push(req.body);
        res.json(announcements)
    });
    project.post("/api/announcements/post/:id", (req, res) => {
  
        announcements.push(newmassege);
        res.json(announcements)
    });
    project.delete('/api/announcements/delete/:id', (req, res)=>{
        announcements =announcements.filter((item)=> item.massage !== req.params.massage);
        res.json(announcements) 
})
project.put('/api/announcements/update/:name', (req, res)=>{
    let user =announcements.find((elm)=> elm.massage== req.params.massage);
    user.massage = req.body.massage
    res.json(announcements) 
})

//homeworks messages and send to it, update,delete messages
project.get('/api/homeworks', (req, res)=>{
        res.json(homeworks);
    });

    project.post("/api/homeworks/post/:id", (req, res) => {
  
    homeworks.push(newmassege);
    res.json(homeworks)

});
project.delete('/api/homeworks/delete/:id', (req, res)=>{
    homeworks =homeworks.filter((item)=> item.massage !== req.params.massage);
    
    res.json(homeworks) 
})
project.put('/api/homeworks/update/:name', (req, res)=>{
let user =homeworks.find((elm)=> elm.massage == req.params.massage);
user.massage = req.body.massage
res.json(homeworks) 
})
//q-and-a messages and send to it, update,delete messages
project.get('/api/q_and_a/create', (req, res)=>{
   
    res.json(q_and_a)
});
project.post("/api/q_and_a/:massage", (req, res) => {

      q_and_a.push(newmassege);
      res.json(q_and_a)
  
  });
project.delete('/api/q_and_a/delete/:id', (req, res)=>{
    q_and_a =q_and_a.filter((item)=> item.massage !== req.params.massage);
    
    res.json(q_and_a) 
})
project.put('/api/q_and_a/update/:name', (req, res)=>{
let user =q_and_a.find((elm)=> elm.massage == req.params.massage);
user.massage = req.body.massage
res.json(q_and_a) 
})

 //random_chatting messages and send to it, update,delete messages 
 project.get('/api/random_chatting/create', (req, res)=>{
    
    res.json(random_chatting)
});
project.post("/api/random_chatting/:id", (req, res) => {
    
    random_chatting.push(newmassege);
      res.json(random_chatting)
  
  });
project.delete('/api/random_chatting/delete/:id', (req, res)=>{
    random_chatting =random_chatting.filter((item)=> item.massage !== req.params.massage);
    
    res.json(random_chatting) 
})
project.put('/api/random_chatting/update/:name', (req, res)=>{
let user =random_chatting.find((elm)=> elm.massage == req.params.massage);
user.massage = req.body.massage
res.json(random_chatting) 
})
//Private_chat
project.get('/api/Private_chat/create', (req, res)=>{
    
    res.json(Private_chat)
});
project.post("/api/Private_chat/:name/:massagefor", (req, res) => {
    
    Private_chat.push(newmassege);
      res.json(Private_chat)
  
  });
project.delete('/api/Private_chat/delete/:id', (req, res)=>{
    Private_chat =Private_chat.filter((item)=> item.massage !== req.params.massage);
    res.json(Private_chat) 
})
project.put('/api/Private_chat/update/:name/:massagefor', (req, res)=>{
let user =Private_chat.find((elm)=> elm.massage == req.params.massage);
user.massage = req.body.massage
res.json(Private_chat) 
})

    project.listen(3000,()=>console.log('expers started'));