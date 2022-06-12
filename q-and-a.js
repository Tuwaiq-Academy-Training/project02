import { v4 as uuidv4 } from 'uuid';
uuidv4();
let data = require ('./data.json')
const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Groub a and q: ${req.body.id} - ${req.body.name3}
    -${req.body.messageQ}-${req.body.messageA}`)
});

app.delete('/api/user/delete/:name3',(req,res)=>{
    data= data.filter(name3);
    data=data.filter(id);
    data=dtat.filter(messageQ);
    dtat=data.filter(messageA);
    res.json(data);
});

app.put('/api/user/update/:name3',(req,res)=>{
    let user = data.find((elm)=>name3==req.params.name3);
    user.id = req.body.id;
    user.messageQ = req.body.messageQ;
    user.messageA= req.body.messageA;
    res.json(data);
});
app.listen(3000,()=>console.log('expres started'));

 