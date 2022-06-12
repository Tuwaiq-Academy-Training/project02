let ann = require('./announcements.json');
let homeworks = require('./homeworks.json');
let q = require('./q-and-a.json');
let randomchating = require('./random-chating.json');
let private= require('./private.json');
const express = require('express');
const app = express();


app.use(express.urlencoded({extended:false}));//**********to read url ***********
app.use(express.json());//******/ to read json file ***********

app.get('/', function (req, res) {
    res.send('START CHATING')
  });

//*********************************SEND MESSAGES*************************************
app.post('/messages/:groupname',(req,res)=>{
    if(req.params.groupname=='homeworks'){
    homeworks.push(req.body);
    res.json(homeworks);

    }else if(req.params.groupname=='random-chating'){
    randomchating.push(req.body)
    res.json(randomchating);

    }else if(req.params.groupname=='announcements'){
        ann.push(req.body)
        res.json(ann);

    }else if(req.params.groupname=='q-and-a'){
     q.push(req.body)
     res.json(q);}
                    
});

//***********************GET MESSAGES*********************************************
app.get('/messages/:groupname',(req,res)=>{
    if(req.params.groupname=='homeworks'){
    res.json(homeworks);

    }else if(req.params.groupname=='random-chating'){
    res.json(randomchating);

    }else if(req.params.groupname=='announcements'){
    res.json(ann);

    }else if(req.params.groupname=='q-and-a'){
    res.json(q);}
});

//***********************************UPDATE MESSAGES****************************************
app.put('/update/:groupname/:id', (req,res)=>{
    if(req.params.groupname=='homeworks'){
    let user = homeworks.find((elm)=> elm.id == req.params.id);
    user.msg = req.body.msg ;
    res.json(homeworks);

   }else if(req.params.groupname=='random-chating'){
    let user = randomchating.find((elm)=> elm.id == req.params.id);
    user.msg = req.body.msg ;
   res.json(randomchating);

   }else if(req.params.groupname=='announcements'){
    let user = ann.find((elm)=> elm.id == req.params.id);
    user.msg = req.body.msg ;
   res.json(ann);

  }else if(req.params.groupname=='q-and-a'){
    let user = q.find((elm)=> elm.id == req.params.id);
    user.msg = req.body.msg ;
  res.json(q);}
  });

//************************************delete message*************************************** 
app.delete('/delete/:groupname/:id', (req,res)=>{
    if(req.params.groupname=='homeworks'){
   homeworks = homeworks.filter((elm)=> elm.id !== req.params.id);
    res.json(homeworks);

   }else if(req.params.groupname=='random-chating'){
    randomchating = randomchating.filter((elm)=> elm.id !== req.params.id);
   res.json(randomchating);
  

   }else if(req.params.groupname=='announcements'){
    ann = ann.filter((elm)=> elm.id !== req.params.id);
    res.json(ann);

  }else if(req.params.groupname=='q-and-a'){
    q = q.filter((elm)=> elm.id !== req.params.id);
    res.json(q);}
  });

//*********************************** PRIVATE CHAT****************************************
app.get('/:name/getmessages',(req,res) => {
    private = private.filter((elm)=>elm.name == req.params.name);
    res.json(private);
    }) ;

    app.delete('/:name/deletemessages' ,(req,res) => {
    private = private.filter((elm) => elm.name !== req.params.name);
    res.json(private)
    });

    app.post('/private/:name',(req,res)=>{
        private.push(req.body);
        res.json(private);
    });
  
app.listen(3000, ()=> console.log('epress started'));

