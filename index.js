const express = require("express");
const app = express();

app.get("/baidu01/", function(req, res){
    res.send("<h1> Bem vindo ao Baidu 01!</h1>");
})

app.get("/baidu02/", function(req, res){
    res.send("<h2> Bem vindo ao Baidu 02!</h2>");
})

app.get("/baidu03/", function(req, res){
    res.send("<h3> Bem vindo ao Baidu 03!</h3>");
})


app.listen(4000, function(erro){
    if (erro) {
        console.log("Erro ao Iniciar");
    }else {
        console.log("Servidor iniciado");
    }
})