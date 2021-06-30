// var app = require('./config/custom-express')();
var express = require('express');
var pagamentoController = require('./controllers/pagamento');

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/pagamentos', pagamentoController);

app.listen(3001, function(){
  console.log("Servidor rodando!");
});

