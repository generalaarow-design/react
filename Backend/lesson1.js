const cors=require('cors');
const mysql=require('mysql2');
const express=require('express');
const path=require('path');
const app=express();
app.use(express.json())
app.use(express.static("public")) 
app.use(cors())
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'zamzam'
})

app.use(express.urlencoded({ extended: true }));
app.get("/address",(req,res)=>{
    res.sendFile(path.join(__dirname,'address.html'))
});

app.post("/process",(req,res)=>{
    const name=req.body.txt1;
    const tell=req.body.txt2;
    const Address=req.body.txt3;
    sql="insert into arday values(null,?,?,?)"
    conn.query(sql,[name,tell,Address],(err,result)=>{
        if(err) throw err;
        res.json(result.affectedRows==1?{message:'saved successfully'}:{message:'not saved'})
       // res.send(result.affectedRows==1?`Saved seccussfully last ID:${result.insertId}`:'not saved')
    })
   // res.send(`waxaa dagan tahay <b> ${dagmo}</b> gaar ahaan <b> ${Villa}</b> waliba ka ah <b> ${Area} </b> `)
})

app.get('/index',(req,res)=>{
    res.send('hello world naciimo')
})

app.get('/student',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/prog',(req,res)=>{
    const name=req.query.txt1;
    const tell=req.query.txt2;
    res.send(`hello ${name} your tell is ${tell}`)
})
app.listen(2000);