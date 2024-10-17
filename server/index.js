const express = require("express")
const app = express();
const mysql = require('mysql2') //isso pegara a versão mais atual do mysql que instalamos


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"c@tolic@",
    database:"Cadastro",
})


app.get('/', (req, res)=>{
    res.send("Seja Bem Vindo !!!")
})

app.listen(3001,()=>{
    console.log("rodando servidor")
})