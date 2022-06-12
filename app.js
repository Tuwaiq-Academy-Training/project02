let ann = require('./annFile.json');
let Hm = require('./HM.json');
let q_a = require('./q&a.json');
let ra = require('./random.json');
let priv = require('./private.json')
const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Group1
//____________________________________
app.get('/announcements',(req,res)=>{
    res.json(ann) 
})
app.post('/announcements/createMes',(req,res)=>{
    ann.push(req.body)
    res.json(ann)
})
app.delete('/announcements/delete/:mes',(req,res)=>{
    ann = ann.filter((elm)=>elm.mes !== req.params.mes);
    res.json(ann)

})
app.put('/announcements/update/:id',(req,res)=>{
    let upMes = ann.find((elm)=>elm.id == req.params.id);
     upMes.name = req.body.name;
     res.json(ann)
})
//Group2
//____________________________________
app.get('/homeworks',(req,res)=>{
    res.json(Hm) 
    res.send('welecome to homeworks group ')
})
app.post('/homeworks/createMes',(req,res)=>{
    Hm.push(req.body)
    res.json(Hm)
})
app.delete('/homeworks/delete/:mes',(req,res)=>{
    Hm = Hm.filter((elm)=>elm.mes !== req.params.mes);
    res.json(Hm)

})
app.put('/homeworks/update/:id',(req,res)=>{
    let upHM = Hm.find((elm)=>elm.id == req.params.id);
     upHM.name = req.body.name;
     res.json(Hm)
})
//Group3
//____________________________________
app.get('/q-and-a',(req,res)=>{
    res.json(q_a) 
    res.send('welecome to announcements group ')
})
app.post('/q-and-a/createMes',(req,res)=>{
    q_a.push(req.body)
    res.json(q_a)
})
app.delete('/q-and-a/delete/:mes',(req,res)=>{
    q_a= q_a.filter((elm)=>elm.mes !== req.params.mes);
    res.json(q_a)

})
app.put('/q-and-a/update/:id',(req,res)=>{
    let upq_a = q_a.find((elm)=>elm.id == req.params.id);
     upq_a.name = req.body.name;
     res.json(q_a)
})
//Group4
//____________________________________
app.get('/random-chatting',(req,res)=>{
    res.json(ra) 
   // res.send('welecome to announcements group ')
})
app.post('/random/createMes',(req,res)=>{
    ra.push(req.body)
    res.json(ra)
})
app.delete('/random/delete/:mes',(req,res)=>{
    ra= ra.filter((elm)=>elm.mes !== req.params.mes);
    res.json(ra)

})
app.put('/random/update/:id',(req,res)=>{
    let upra = ra.find((elm)=>elm.id == req.params.id);
     upra.name = req.body.name;
     res.json(ra)
})
 
//private Group
//____________________________________
let check = priv.name;
 function reqname(req,res,next){
 if(req.params.name == check){ 
    priv.push(req.body)
    
 }
 else{
  // (req.params.name !== check )
    res.send('try agine') 
 } 
 next();
}
app.get('/private',(req,res)=>{
    res.json(priv)
})

app.use(reqname)
app.post('/private/createMes/:name',(req,res,next)=>{
    //priv.push(req.body)
res.json(priv)
})

app.delete('/private/delete/:mes',(req,res)=>{
    priv = priv.filter((elm)=>elm.mes !== req.params.mes);
    res.json(priv)

})
app.put('/private/update/:mes',(req,res)=>{
    let upMes = priv.find((elm)=>elm.mes == req.params.mes);
     upMes.name = req.body.name;
     res.json(priv)
})

app.listen(3000,()=> console.log('express started'))