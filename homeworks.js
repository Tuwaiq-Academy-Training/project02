import { v4 as uuidv4 } from 'uuid';
uuidv4();

let data = require ('./data.json')
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`name2: ${req.body.id} 
    - ${req.body.name2}-${req.body.message4}-${req.body.message5}`)
});

app.delete('/api/user/delete/:name2',(req,res)=>{
    data= data.filter(name2);
    data=data.filter(id);
    data=dtat.filter(message4);
    dtat=data.filter(message5);
    res.json(data);
});

app.put('/api/user/update/:name2',(req,res)=>{
    let user = data.find((elm)=>elm.name2==req.params.name2);
    user.id = req.body.id;
    user.message4 = req.body.message4;
    user.message5 = req.body.message4;
    res.json(data);
});
app.listen(3000,()=>console.log('expres started'));

 