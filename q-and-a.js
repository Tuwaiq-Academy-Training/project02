

const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.get('/api/qustion', (req, res) => {
  res.json(data)

});

app.post('/api/qustion/create', (req,res) => {
   

    data.push(req.body)
    res.json(data);
});

app.put('/api/qustion/update/:asnwer',(req,res)=>{
    let user = data.find((elm) =>elm.name == req.params.name);
    res.json(data);
    });

