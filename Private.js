const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
//message id 
app.get("/message/:id",async(req,res) =>{
    const id = req.params.id;

    let content;

    try {
        content = await fs.readFile(`date/message/${id}.text`,"utf-8");
    }catch (err){
        return res.sendStatus(404);

    }
    res.json({
        content: content

    });


});

//message sent 
app.post("/message", async(req,res) => {
    const id = uuid();
    const content = req.body.content;
    
   
    
    
    if (!content) {
        return res.sendStatus(400);
    }
     
    await fs.mkdir("data/message",{ recursive:true});
    await fs.writeFile(`data/message/${id}.txt`,content);

  
    res.status(201).json({
        id:id
    });


});

const users = [];

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!"
    };
  }

  // Check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (existingUser) {
    return {
      error: "Username is in use!"
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => {
  return users.find(user => user.id === id);
};

const getUsersInRoom = room => {
  room = room.trim().toLowerCase();
  return users.filter(user => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};

app.listen(3000, () => console.log("API server is running"));
