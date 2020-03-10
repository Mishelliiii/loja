//estou habilitando qualquer *.js a usar o meu app
//app é aplicação nodejs
//Colocando e instanciando todos os pacotes que usarei nesse projeto
require('marko/node-require').install();
require('marko/express');
const express = require('express');

//para usar variavel de sessao 

const session = require('express-session');
const express_store = require('express-mysql-session')(session);
const app = express();

const bodyParser = require('body-parser');

// essa permite que o nodejs consiga pegar dados via req.body
app.use(bodyParser.urlencoded({
    extended: true
}));

// chamando o pacote method-override
const methodOverride = require('method-override');

//criando a forma de armazenamento das variaveis de sessao de bd
var opcoes = {host :'localhost',
post:3306,
user:'root',
password:'',
database:'nodemishelle'}
var session_store = new express_store(opcoes);

// para permitir o POST e PUT para o formulario
app.use(methodOverride(function (req,res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) 
    {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

//trabalhando com variaveis de sessao
app.use(session({
    secret:'odesempre',
    saveUninitialized:true,
    resave:true,
    store:session_store
}));


const rotas = require('../app/rotas/rotas');
rotas(app);

// indicando um caminho de diretorio
app.use('/caminho',express.static('src/app/views/usuarios/imagens'));

module.exports = app;