const exp = require("express");
const mycon = require("mysql");
const cors = require("cors");

const app = exp();
app.use(cors());
app.use(exp.json());

const c = mycon.createConnection({
    host : "localhost",
    port : 3312,
    user:"root",
    password:"",
    database:"student",
});

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log("Database Connected")}
})

app.get('/',(req,res)=>{
    c.query("select * from studdetails",(err,result)=>{
       res.send(result);
    });
});

app.post('/add',(req,res)=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    c.query("insert into studdetails(firstname,lastname,email,status)values(?,?,?,?)",[firstname,lastname,email,'0'],(err,result)=>{
        if(err){
            let s = {'status':'error'}
            res.send(s);
        }
        else{
            let s = {'status':'inserted'}
            res.send(s);
        }
    })
})

app.get('/getpstudent/:id',(req,res)=>{
    const {id} = req.params;
    c.query("select * from studdetails where id=?",[id],(err,result)=>{
       res.send(result);
    });
});

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    c.query("delete from studdetails where id=?",[id],(err,result)=>{
        res.send(result);
    })
});

app.post('/update',(req,res)=>{
    const id = req.body.id;
    const firstname =req.body.firstname;
    const lastname =req.body.lastname;
    const email = req.body.email;
    c.query("update studdetails set firstname=?,lastname=?,email=? where id=?",[firstname,lastname,email,id],(error,result)=>{
        if(error){
            let s = {'status':'error'}
            res.send(s);
        }
        else{
            let s = {'status':'Updated'}
            res.send(s);
        }
    });
});

app.listen(3004);
