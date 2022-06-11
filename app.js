
const express = require('express')
const { userInfo } = require('os')
const app = express()
let data = require('./data.json')
// let data2 = require('./data2.json')
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
// ---------- anouncement route --------------
app.get ('/announcement/:id',(req,res) => {
    data = data.filter((elm)=>elm.id == req.params.id);
    res.json(data)
    }) 

    app.post('/announcement/post/create' , (req,res) => {
        data.push(req.body),
        res.json(data)
    })

    app.delete('/announcement/delete/:id' ,(req,res) => {
        data = data.filter((elm) => elm.id !== req.params.id);
        res.json(data)
    })

    app.put('/announcement/update/:id', (req,res)=>{
        let user = data.find((elm)=> elm.id == req.params.id );
        user.id = req.body.id ;
        res.json(data)
    })

    // --------------homework route----------------
    app.get ('/homeworks/:id',(req,res) => {
        data = data.filter((elm)=>elm.id == req.params.id);
        res.json(data)
        }) 
    
        app.post('/homeworks/post/create' , (req,res) => {
            data.push(req.body),
            res.json(data)
        })
    
        app.delete('/homeworks/delete/:id' ,(req,res) => {
            data = data.filter((elm) => elm.id !== req.params.id);
            res.json(data)
        })
    
        app.put('/homeworks/update/:id', (req,res)=>{
            let user = data.find((elm)=> elm.id == req.params.id );
            user.id = req.body.id ;
            res.json(data)
        })

// ---------------------q-a route---------------------------

app.get ('/q-and-a/:id',(req,res) => {
    data = data.filter((elm)=>elm.id == req.params.id);
    res.json(data)
    }) 

    app.post('/q-and-a/post' , (req,res) => {
        data.push(req.body),
        res.json(data)
    })

    app.delete('/q-and-a/delete/:id' ,(req,res) => {
        data = data.filter((elm) => elm.id !== req.params.id);
        res.json(data)
    })

    app.put('/q-and-a/update/:id', (req,res)=>{
        let user = data.find((elm)=> elm.id == req.params.id );
        user.id = req.body.id ;
        res.json(data)
    })
// ------------------random chatting route---------------------
app.get ('/random-chatting/:id',(req,res) => {
    data = data.filter((elm)=>elm.id == req.params.id);
    res.json(data)
    }) 

    app.post('/random-chatting/post' , (req,res) => {
        data.push(req.body),
        res.json(data)
    })

    app.delete('/random-chatting/delete/:id' ,(req,res) => {
        data = data.filter((elm) => elm.id !== req.params.id);
        res.json(data)
    })

    app.put('/random-chatting/update/:id', (req,res)=>{
        let user = data.find((elm)=> elm.id == req.params.id );
        user.id = req.body.id ;
        res.json(data)
    })
// -------------- private messaging route --------------
app.get ('/sara/getmessages/:name',(req,res) => {
    data = data.filter((elm)=>elm.name == req.params.name);
    res.json(data)
    }) 

    app.delete('/sara/getmessages/:name' ,(req,res) => {
        data = data.filter((elm) => elm.name !== req.params.name);
        res.json(data)
    })

    app.get ('/mohammed/getmessages/:name',(req,res) => {
        data = data.filter((elm)=>elm.name  == req.params.name);
        // data = data.filter((elm)=>elm.name == req.params.name);
        res.json(data)
        }) 
    
        app.delete('/mohammed/getmessages/:name' ,(req,res) => {
            data = data.filter((elm) => elm.name !== req.params.name);
            res.json(data)
        })

     
    
    

app.listen(3000,()=> console.log('express running on server'))