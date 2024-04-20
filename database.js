//untuk package
const { constants } = require('buffer');
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

//untuk menampilkan databasenya
const app = express();

app.set("layout engine", "js");
app.set("layout","layout")

//untuk mengkoneksikan ke database
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"perpustakaanuai"
})

db.connect((err) => {
    if(err) throw err
    console.log("database connected")

    const sql = "SELECT * FROM yayasanuai"
    db.query(sql, (err,result) => {
        const users=JSON.parse(JSON.stringify(result))
        console.log("hasil database ->", users)
        app.get("/",(req,res) => {
            res.send(users)
        })
    })
})

app.listen(3000, () => {
    console.log("server berhasil")
})