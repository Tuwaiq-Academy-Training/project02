let express=require('express');
let res = require('express/lib/response');
let app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
let data=require('./data.json')
let hw=require('./hw.json' )
let qAnda=require('./qAnda.json' )
let RandomCh=require('./RandomCh.json' )








//# for important messages
app.get('/group/announcement',(req,res)=>{
    data=data.filter((elm)=>elm.id ==req.params.id);
     res.json(data);})

app.post('/group/announcement/create/:id',(req,res)=>{  
    let newinfo={
            id:req.body.id,
            name:req.body.name,
            importantMessege:req.body.importantMessege
        } 
     data.push(newinfo);
     res.json(data);  });

    
 app.put('/group/announcement/update/:id',(req,res)=>{
        let pepole=data.find((elm)=>elm.id==req.params.id);
        pepole.name=req.body.name;
        data.push(req.body.name);
        res.json(data);  
        });
    app.delete('/group/announcement/delete/:id',(req,res)=>{
        data=data.filter((elm)=>elm.id !==req.params.id)
        res.json(data);})




 //# for help with homeworks
//homeworks

app.get('/group/homeworks/:phase',(req,res)=>{
    hw=hw.filter((elm)=>elm.phase ==req.params.phase);
        res.json(hw);})

app.post('/group/homeworks/create/:phase',(req,res,)=>{
    let newinfo={
        phase:req.body.phase,
        course:req.body.course}  
        hw.push(newinfo);
        res.json(hw);});

app.put('/group/homeworks/update/:phase',(req,res)=>{
    let update=hw.find((elm)=>elm.phase==req.params.phase);
    update.hw2=req.body.hw2;
    res.json(hw);});
app.delete('/group/homeworks/delete/:phase',(req,res)=>{
     hw=hw.filter((elm)=>elm.phase !==req.params.phase)
     res.json(hw);});

//Q and A

app.get('/group/qAnda/:name',(req,res)=>{
    qAnda=qAnda.filter((elm)=>elm.name !==req.params.name);
    res.json(qAnda);})

app.post('/group/qAndA/create/:name',(req,res)=>{
    let newinfo={
        name:req.body.name,
        course:req.body.course
    } 
   
    qAnda.push(req.body);
    res.json(qAnda);})


app.put('/group/qAnda/update/:name',(req,res)=>{
        let person=qAnda.find((elm)=>elm.name==req.params.name);
        person.name=req.body.name;
        data.push(req.body.name);
        res.json(qAnda);  })
       

        
app.delete('/group/qAnda/delete/:name',(req,res)=>{
            qAnda=qAnda.filter((elm)=>elm.name !==req.params.name)
            res.json(qAnda);});


    //random-chatting

app.get('/group/RandomCh/:name',(req,res)=>{
        RandomCh=RandomCh.filter((elm)=>elm.name ==req.params.name);
            res.json(RandomCh);})
  
    app.post('/group/RandomCh/create/:name',(req,res,)=>{
        RandomCh.push(req.body);
        res.json(RandomCh);});
    
        app.put('/group/RandomCh/update/:name',(req,res)=>{
            let random=RandomCh.find((elm)=>elm.name==req.params.name);
            random.messege2=req.body.messege2;
            res.json(RandomCh);});
    
        app.delete('/group/RandomCh/delete/:name',(req,res)=>{
             RandomCh=RandomCh.filter((elm)=>elm.name !==req.params.name)
             res.json(RandomCh);});
    



app.listen(3000,(err)=>{
    if(err) console.log('server is not running');
    console.log('server running on port 3000')
})

