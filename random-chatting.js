import { v4 as uuidv4 } from 'uuid';
uuidv4();
let data = require ('./data.json')
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Random: ${req.body.id} - ${req.body.name4}
     - ${req.body.messageD}`)
});

app.delete('/api/user/delete/:name4',(req,res)=>{
    data= data.filter(name4);
    res.json(data);
});
app.put('/api/user/update/:name4',(req,res)=>{
    let user = data.find((elm)=>elm.name4==req.params.name4);
    user.id = req.body.id;
    user.name4= req.body.name4;
    user.messageD = req.body.messageD;
    res.json(data);
});
app.listen(3000,()=>console.log('expres started'));

 