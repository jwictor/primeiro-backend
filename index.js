const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

router(app, express);
tabelas.init(conexao);

app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Rodando que e uma belezinha!");
});