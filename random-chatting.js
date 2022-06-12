const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
 
//random chate
app.get("/random",(req,res) =>
{
    const homwork =["qusation1","qusation2","qusation3","qusation4"];
  const subject =["Math","Phesecs","programing languge","Cimestry"];
  const duedate =["sundy","mondy","wensday"];

  res.json(
      {
        homwork:_.sample(homwork) ,
        subject:_.sample(subject),
        duedate:_.sample(duedate)

      });

     
});

app.listen(3000, () => console.log("API server is running"));