const express = require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');
const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json());
let chat1=require('./conver1.json');
let chat2=require('./conver2.json');

/*app.use((req, res, next) => {
    // Make `user` and `authenticated` available in templates
    res.locals.id = req.id
   res.locals(chat1)
    next()
  })*/

app.get('/private/:id/:id/chat', (req, res)=> {
   
    //res.locals.id=req.params.id;
    res.json(chat1);
   

});
app.get('/private/:id/:id/chat', (req, res)=> {
 
   res.json(chat2);
});
app.delete('/private/delete/:id/',(req,res)=>{
    chat1 =chat1.filter((elm=>elm.id!==parseInt(req.params.id)))
    res.json(chat1);}
);

app.listen(3000,()=>console.log("Epress Started!"));