const express =require('express')
const app =express();
let data = require('./announcements.json');
let data2 = require('./homeworks.json');
let data3 = require('./q-and-a.json');
let data4 = require('./public_chat.json');
let private1 = require('./private_chat1.json');


app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/chat/announcements/all_messages' ,(req,res)=>{
res.json(data)
})

app.post('/chat/announcements/create_message',(req,res)=>{
    data.push(req.body);
    res.json(data);
    });
 app.put('/chat/announcements/update',(req,res)=>{
        let sender =data.find((element)=> element.phone==req.body.phone)
        sender.message =req.body.message;
        res.json(data)
       });   
       app.delete('/chat/announcements/delete',(req,res)=>{
        data=data.filter((elm)=>elm.message !== req.body.message && elm.phone !==req.body.phone);
        res.json(data) 
       }); 
       //---------------------------------end group1----------------------------
 app.get('/chat/homework/all_messages' ,(req,res)=>{
        res.json(data2)
        })
        
 app.post('/chat/homework/create_message',(req,res)=>{
            data2.push(req.body);
            res.json(data2);
            });
 app.put('/chat/homework/update',(req,res)=>{
                let sender =data2.find((element)=> element.phone==req.body.phone)
                sender.message =req.body.message;
                res.json(data2)
               });   
               app.delete('/chat/homework/delete',(req,res)=>{
                data2=data2.filter((elm)=>elm.message !== req.body.message && elm.phone !==req.body.phone);
                res.json(data2) 
               }); 
               //----------------------------end group2---------------------------
               app.get('/chat/homework/all_messages' ,(req,res)=>{
                res.json(data3)
                })
                
                app.post('/chat/homework/create_message',(req,res)=>{
                    data3.push(req.body);
                    res.json(data3);
                    });
                 app.put('/chat/homework/update',(req,res)=>{
                        let sender =data3.find((element)=> element.phone==req.body.phone)
                        sender.message =req.body.message;
                        res.json(data3)
                       });   
                       app.delete('/chat/homework/delete',(req,res)=>{
                        data3=data3.filter((elm)=>elm.message !== req.body.message && elm.phone !==req.body.phone);
                        res.json(data3) 
                       }); 
                       //----------------------------end group3---------------------------
                       app.get('/chat/pub_chat/all_messages' ,(req,res)=>{
                        res.json(data4)
                        })
                        
                        app.post('/chat/pub_chat/create_message',(req,res)=>{
                            data4.push(req.body);
                            res.json(data4);
                            });
                         app.put('/chat/pub_chat/update',(req,res)=>{
        let sender =data4.find((element)=> element.phone==req.body.phone)
                                sender.message =req.body.message;
                                res.json(data4)                        
                               });   
                               app.delete('/chat/pub_chat/delete',(req,res)=>{
                                data4=data4.filter((elm)=>elm.message !== req.body.message && elm.phone !==req.body.phone);
                                res.json(data4) 
                               }); 
                               //----------------------------end group4---------------------------
                               app.get('/chat/private_chat1/:num_chat/get_message' ,(req,res)=>{
                                let messages =private1.find((element)=> element.num_chat==req.params.num_chat)
                                messages.message =req.body.message;
                                res.json(messages)
                                })
                                
                                app.post('/chat/private_chat/create',(req,res)=>{
                                    private1.push(req.body);
                                    res.json("message created");
                                    });
                                 app.put('/chat/private_chat/update',(req,res)=>{
                                        let messages =private1.find((element)=> element.phone==req.body.phone)
                                        messages.message =req.body.message;
                                        res.json("updated")
                                       });   
                                       app.delete('/chat/private_chat/delete',(req,res)=>{
                                        private1=private1.filter((elm)=>elm.message === req.body.message && elm.phone !==req.body.phone);
                                        res.json(private1) 
                                       }); 
                                      
                                                                      
    app.listen(3000,()=>console.log('the server ready ,you can test'))

    