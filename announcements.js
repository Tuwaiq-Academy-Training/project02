let data = require ('./data.json')
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`annoucements:${req.body.name1} 
    - ${req.body.message1} - ${req.body.message2} -${req.body.message3}-${req.body.id}`)
});
app.delete('/api/user/delete/:name1',(req,res)=>{
    data= data.filter(name1);
    data=data.filter(id);
    data=data.filter(message1);
    data=dtat.filter(message2);
    dtat=data.filter(message3);
    res.json(data);
});

app.put('/api/user/update/:name1',(req,res)=>{
    let user = data.find((elm)=>elm.name1==req.params.name1);
    user.message1 = req.body.message1;
    user.message2 = req.body.message2;
    user.message3 = req.body.message3;
    res.json(data);
});
app.listen(3000,()=>console.log('expres started'));

 