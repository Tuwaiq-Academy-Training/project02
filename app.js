const express = require('express')
const app = express();
let ann = require('./announ.json')
let hw = require ('./hw.json')
let qu = require ('./q-and-a.json')
let random = require ('./random-chatting.json')


app.use(express.urlencoded({extended:false}));
app.use(express.json());




app.get('/group/announcement', (req, res)=> {
    res.json(ann);
});
app.post('/group/announcement/message', (req, res)=> {

    ann.push(req.body)
    res.json(ann);
});

app.put('/group/announcement/update/:id', (req, res)=> {
    let found = ann.find((item)=>{
    return item.id === parseInt (req.params.id)
    });

if(found){
        let update = {
        id: found.id,
        message: req.body.message
    }
    let targetIndex = ann.indexOf(found)
    ann.splice(targetIndex,1,update)
    res.send(ann)
    }else{
    res.sendStatus(404)
    };
});

app.delete('/group/announcement/delete/:id',(req,res)=>{

    let found1 = ann.find((item)=>{
        return item.id === parseInt (req.params.id)
        });
        if(found1){

        let targetIndex = ann.indexOf(found1)
        ann.splice(targetIndex,1)
        res.send(ann)
        }else{
        res.sendStatus(404)
        };
    });

    //-------------------------------------------------------------------------------------------------------------------------
    app.get('/group/homeworks', (req, res)=> {
        res.json(hw);
    });
    app.post('/group/homeworks/message', (req, res)=> {
    
        hw.push(req.body)
        res.json(hw);
    });
    app.put('/group/homeworks/update/:id', (req, res)=> {
        let found3 = hw.find((item)=>{
        return item.id === parseInt (req.params.id)
        });
    
    if(found3){
            let update = {
            id: found.id,
            message: req.body.message
        }
        let targetIndex = hw.indexOf(found)
        hw.splice(targetIndex,1,update)
        res.send(hw)
        }else{
        res.sendStatus(404)
        };
    });
    
    app.delete('/group/homeworks/delete/:id',(req,res)=>{
    
        let found4 = hw.find((item)=>{
            return item.id === parseInt (req.params.id)
            });
            if(found4){
    
            let targetIndex = hw.indexOf(found4)
            hw.splice(targetIndex,1)
            res.send(hw)
            }else{
            res.sendStatus(404)
            };
        });


        //---------------------------------------------------------------------------------------------------------------------------------------
        app.get('/group/questions', (req, res)=> {
            res.json(qu);
        });
        app.post('/group/questions/message', (req, res)=> {
        
            questionsAnswers.push(req.body)
            res.json(qu);
        });
        app.put('/group/questions/update/:id', (req, res)=> {
            let found5 = qu.find((item)=>{
            return item.id === parseInt (req.params.id)
            });
        
        if(found5){
                let update = {
                id: found.id,
                message: req.body.message
            }
            let targetIndex = qu.indexOf(found)
            qu.splice(targetIndex,1,update)
            res.send(qu)
            }else{
            res.sendStatus(404)
            };
        });
        
        app.delete('/group/questions/delete/:id',(req,res)=>{
        
            let found6 = qu.find((item)=>{
                return item.id === parseInt (req.params.id)
                });
                if(found6){
        
                let targetIndex = qu.indexOf(found4)
                qu.splice(targetIndex,1)
                res.send(qu)
                }else{
                res.sendStatus(404)
                };
            });


            //-----------------------------------------------------------------------------------------

            app.get('/group/random', (req, res)=> {
                res.json(random);
            });
            app.post('/group/random/message', (req, res)=> {
            
                randomChat.push(req.body)
                res.json(random);
            });
            app.put('/group/random/update/:id', (req, res)=> {
                let found7 = random.find((item)=>{
                return item.id === parseInt (req.params.id)
                });
            
            if(found7){
                    let update = {
                    id: found.id,
                    message: req.body.message
                }
                let targetIndex = random.indexOf(found)
                random.splice(targetIndex,1,update)
                res.send(random)
                }else{
                res.sendStatus(404)
                };
            });
            
            app.delete('/group/random/delete/:id',(req,res)=>{
            
                let found8 = random.find((item)=>{
                    return item.id === parseInt (req.params.id)
                    });
                    if(found8){
            
                    let targetIndex = random.indexOf(found4)
                    random.splice(targetIndex,1)
                    res.send(random)
                    }else{
                    res.sendStatus(404)
                    };
                });

app.listen(3000,() =>console.log('express starte!'))
