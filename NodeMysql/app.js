const express= require('express');
const mysql= require('mysql')
const app = express();
const dotenv = require('dotenv')

dotenv.config();

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.PASSWORD,
    database:"tutorial"

});

db.connect((e)=>{
    if(e){
        throw e
    }
    console.log("mysql connected")

})

//CREATE DB
app.get('/createdb',(req,res)=>{
    let sql= "CREATE DATABASE tutorial";
    db.query(sql,(err,result)=>{
        if(err)throw err
        
        console.log(result)
        res.send('database created')
    })

})
//CREATE TABLE
app.get("/createpoststable",(req,res)=>{
    let sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
    db.query(sql,(e,result)=>{
        if(e) throw e
        console.log(result) 
        res.send("table created")
    })
})

//CREATE POSTS
app.get("/postdata",(req,res)=>{
    let post={title:"post two", body:'This is post no 2' };
    let sql="INSERT INTO posts SET ?";
    let query = db.query(sql,post,(e, result)=>{
        if(e) throw e
        console.log(result)
        res.send("post 2 added")
        
    })
})

//FETCH ALL THE POSTS
app.get("/getdata",(req,res)=>{
    
    let sql="SELECT * FROM posts";
    let query = db.query(sql,(e, results)=>{
        if(e) throw e
        console.log(results)
        res.send(results)
        
    })
})
//FETCH SINGLE POST
app.get("/getdata/:id",(req,res)=>{
    
    let sql=`SELECT * FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql,(e, result)=>{
        if(e) throw e
        console.log(result)
        res.send(result)
        
    })
})

//UPDATE A POST
app.get("/updatedata/:id",(req,res)=>{
    let newTitle='updated title'
    let sql=`UPDATE posts SET title='${newTitle}' WHERE id=${req.params.id}`;
    let query = db.query(sql,(e, result)=>{
        if(e) throw e
        console.log(result)
        res.send(result)
        
    })
})
//DELETE POST
app.get("/deletedata/:id",(req,res)=>{
    
    let sql=`DELETE FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql,(e, result)=>{
        if(e) throw e
        console.log(result)
        res.send(result)
        
    })
})

app.listen('3000',()=>{
    console.log("Server running on port 3000")
})