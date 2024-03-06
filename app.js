const express = require("express")
const app = express()

const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao conectar: " + erro)
})

//criando tabela
const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    }
})

//comentar depois de rodar a primeira vez
//Agendamentos.sync({force: true})

//ligado o servidor
app.listen(8081, function(){
    console.log("Servidor ativo")
})

//fazendo rotas
app.get("/", function(req, res){
    console.log("Página principal")
    res.send("Primeira página")
})

app.get("/cadastrar", async function(req, res) {
    console.log("Página cadastrada")
    res.send("Primeira cadastrada")
    
    // Cria um novo registro na tabela 'Agendamentos'
    Agendamentos.create({
        nome: "Teste2",
        bairro: "testinho"
    })
  });
  