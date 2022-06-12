
const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

let data = require('./data.json')


//send data to the server to create 
app.post('/api/announcement/create',(req,res)=>{
    data.push(req.body);
    res/json(data);
    });


//
app.put('/api/announcement/update/:exam',(req,res)=>{
    let user = data.find((elm) =>elm.name == req.params.name);
    res.json(data);
    });

app.delete('/api/announcement/delete/:exam' , (req,res)=> {
        data =data.filter((elm) => elm.name !== req.params.name);
        res.json(data);
        
        });

 app.listen(3000, () => console.log("API server is running"));



