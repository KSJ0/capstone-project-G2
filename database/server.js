const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.json());

//mySQL COMMAND//

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "autodeal" 
})

//Stocks DATABASE//
app.get("/Stocks", (req, res) =>{
    const sql = "SELECT * FROM stocks";
    db.query(sql, (err, data) => {
        if (err) return res.json("err");
        return res.json(data);
        
    })  
})



//ADD Stocks DATABASE//

app.post('/addstocks', (req, res) =>{
    const sql = "INSERT INTO stocks (`Brand`, `Model`, `Color`, `Year`, `Stocks`, `Price`, `Branch`) VALUES (?)";
    const values = [
        req.body.brand,
        req.body.model,
        req.body.color,
        req.body.year,
        req.body.stocks,
        req.body.price,
        req.body.branch
    ]

    db.query(sql,[values], (err, data) => {
        if (err) return res.json("error")
        return res.json(data);
    })
})







//UPDATE Stocks DATABASE//

app.get('/edit/:carID', (req, res) => {
    const sql = "SELECT * FROM stocks WHERE carID = ?";
    const id = req.params.carID;
    db.query(sql,[id], (err, result) => {
        if (err) return res.json({Error: err});
        return res.json(result);
    })
})


app.put('/update/:carID', (req, res) =>{
    const sql = "UPDATE stocks SET `Brand` = ?, `Model` = ?,  `Color` = ?, `Year` = ?, `Stocks` = ?, `Price` = ?, `Branch` = ? WHERE carID = ?";
 
       const id = req.params.carID;

    db.query(sql,[ 
        req.body.brand,
        req.body.model,
        req.body.color,
        req.body.year,
        req.body.stocks,
        req.body.price,
        req.body.branch, id], (err, result) => {
        if (err) return res.json("error");
        return res.json({updated: true});
    })
})




//DELETE Stocks DATABASE//

app.delete('/stocks/:carID', (req, res) =>{
    const sql = "DELETE FROM stocks WHERE carID = ? ";
       const id = req.params.carID;

    db.query(sql,[id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})



//PORT//

const port = 3001

app.listen(port, ()=>{
    console.log("its running", port)
})