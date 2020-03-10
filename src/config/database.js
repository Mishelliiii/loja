const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'nodemishelle',
});

connection.connect(function(err){
    if(err)
       console.log('Erro na CONEXÃO com o BANCO DE DADOS - nodeMishelle !')
    else
       console.log('CONEXÃO com BANCO DE DADOS nodeMishelle Okay!!');
});

module.exports = connection;