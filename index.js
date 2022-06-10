const express=require('express');
const app = express();
let ancdata=require('./data/announcements.json');
let hmdata=require('./data/homeworks.json');
let qadata=require('./data/q-a.json');
let ranchdata=require('./data/ranch.json');
let privatedata=require('./data/private.json');
var merge = require('merge'),
    original, cloned;
let bodypars=require('body-parser');

app.use(express.json());
//view announcements
app.get('/announcements',(req,res)=>{
    res.json(ancdata);
})
//add announcement
app.post('/announcements/c/:name/:msg',(req,res)=>{
    ancdata.push({
        "name":req.params.name,
        "msg":req.params.msg
        });
    res.json(ancdata);
})
//delete announcement
app.delete('/announcements/d/:name',(req,res)=>{
    ancdata= ancdata.filter((elm)=> elm.name!==req.params.name);
    res.json(ancdata);
    
 
 });
//update announcement
app.put('/announcements/up/:name',(req,res)=>{
    let user= ancdata.find ((elm) => elm.name==req.params.name);
 user.msg=req.body.msg;
 res.json(ancdata);
 });
//view /homeworks
app.get('/homeworks',(req,res)=>{
    res.json(hmdata);
})
//add /homeworks
app.post('/homeworks/c/:name/:msg',(req,res)=>{
    hmdata.push({
        "name":req.params.name,
        "msg":req.params.msg
        });
    res.json(hmdata);
})
//delete /homeworks
app.delete('/homeworks/d/:name',(req,res)=>{
    hmdata= hmdata.filter((elm)=> elm.name!==req.params.name);
    res.json(hmdata);
    
 
 });
//update /homeworks
app.put('/homeworks/up/:name',(req,res)=>{
    let user= hmdata.find ((elm) => elm.name==req.params.name);
 user.msg=req.body.msg;
 res.json(hmdata);
 });

// view /q-and-a
app.get('/q-and-a',(req,res)=>{
    res.json(qadata);
})
//add /q-and-a
app.post('/q-and-a/c/:name/:msg',(req,res)=>{
    qadata.push({
        "name":req.params.name,
        "msg":req.params.msg
        });
    res.json(qadata);
})
//delete /q-and-a
app.delete('/q-and-a/d/:name',(req,res)=>{
    qadata= qadata.filter((elm)=> elm.name!==req.params.name);
    res.json(qadata);
    
 
 });
//update /q-and-a
app.put('/q-and-a/up/:name',(req,res)=>{
    let user= qadata.find ((elm) => elm.name==req.params.name);
 user.msg=req.body.msg;
 res.json(qadata);
 });

//view random-chatting
app.get('/random-chatting',(req,res)=>{
    res.json(ranchdata);
})
//add /random-chatting
app.post('/random-chatting/c/:name/:msg',(req,res)=>{
    ranchdata.push({
        "name":req.params.name,
        "msg":req.params.msg
        });
    res.json(ranchdata);
})
//delete /random-chatting
app.delete('/random-chatting/d/:name',(req,res)=>{
    ranchdata= ranchdata.filter((elm)=> elm.name!==req.params.name);
    res.json(ranchdata);
    
 
 });
//update /random-chatting
app.put('/random-chatting/up/:name',(req,res)=>{
    let user= ranchdata.find ((elm) => elm.name==req.params.name);
 user.msg=req.body.msg;
 res.json(ranchdata);
 });

 //private chat admin acsses only
    app.get('/private-chatting',(req,res)=>{
        res.json(privatedata);
    }
    )
    //view private chat
    app.get('/private-chatting/:name/:to',(req,res,next)=>{
        privatmsg= privatedata.filter((elm)=> elm.name==req.params.name);
        privatmsg1=privatedata.filter((elm)=> elm.to==req.params.to);
        //merg is packge to merge two jsons together
        let p= merge({privatmsg, privatmsg1});
        res.json(p);
       
    }

    ) 

    //add private chat
    app.post('/private-chatting/c/:name/:to/:msg',(req,res)=>{
       
        privatedata.push({
            "to":req.params.to,
            "name":req.params.name,
            "msg":req.params.msg
            });
          //  next();

    }
    

    )
    //delete private chat
    app.delete('/private-chatting/d/:name/:to',(req,res)=>{
        privatedata= privatedata.filter((elm)=> elm.name!==req.params.name);
        res.json(privatedata);
        
     
     }
        )
        //update private chat
        app.put('/private-chatting/up/:name/:to',(req,res)=>{
            let user= privatedata.find ((elm) => elm.name==req.params.name);
         user.msg=req.body.msg;
         res.json(privatedata);
         }
            )










app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});