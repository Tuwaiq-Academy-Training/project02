
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
app.use(express.json());
let adata=require('./data/announcements.json');
let HomeWorkmdata=require('./data/HomeWork.json');
let qdata=require('./data/q-a.json');
let randomdata=require('./data/random.json');
let Privatedata=require('./data/Private.json');
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/api/announcements",(req, res) => {
  res.json(adata);
});
//add
app.post("/api/announcements/:name/:message",(req, res) => {
   adata.push({
       "name":req.params.name,
       "message":req.params.message
   });
    res.json(adata);
  });
  //delete
  app.delete('/api/announcements/:name',(req,res)=>{
      adata =data.filter((elm)=>elm.name !== req.params.name);
      res.json(adata);
  });
  //update
app.put('/api/announcements/:name',(req,res)=>{
let users =adata.find((elm)=>elm.name == req.params.name);
users.message =req.body.message;
res.json(adata);
});
// add HomeWorkdata
app.put("/api/HomeWork/:name",(req, res) => {
let HomeWorkdata  =HomeWorkdata.find((elm)=>elm.name == req.params.name);
    res.json(HomeWorkdata);
    });
//add HomeWork
    app.post('/api/HomeWork/:name',(req,res)=>{
        let users =adata.find((elm)=>elm.name == req.params.name);
        users.message =req.body.message;
        res.json(adata);
        }); 
        //view
        app.get("/api/HomeWork",(req, res) => {
         res.json(HomeWork);
        })
//update q-a
    app.put('/api/q-a/update/:name', (req, res)=>{
            let user =q_a.find((elm)=> elm.massage == req.params.massage);
            user.massage = req.body.massage
            res.json(q_a) 
            })
    //delete q-a
    app.delete('/api/q_a/delete/:id', (req, res)=>{
             q_a =q_a.filter((item)=> item.massage !== req.params.massage);
            res.json(q_a) 
            })
            app.get('/api/random/create', (req, res)=>{

                res.json(random)
            });
            app.post("/api/random/:id", (req, res) => {
                random.push(NewmMssege);
                  res.json(random)
           
              });
            app.delete('/api/random/delete/:id', (req, res)=>{
                random =random.filter((item)=> item.massage !== req.params.massage);
                res.json(random) 
            })
app.listen(3000, () => console.log("express started"));
