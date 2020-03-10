// chamando a classe ClientesDAO
const CarrinhoDAO = require('../BD/carrinho_dao');

// instância do BD configurado
var db = require('../../config/database');

class CarrinhoDAO
{
    constructor(db)
    {
        this.db=db;
    }
    validaAcessoUsuario(cpf,senha) {
        return new Promise((resolve, reject) => {
           console.log("CPF DA VALIDACAO = " + cpf);
           console.log("SENHA DA VALIDACAO = " + senha);
           var sqlCons = "SELECT * FROM USUARIOS WHERE cpf='" + cpf +
               "' and senha='" + senha + "'";
           console.log(sqlCons);
           this._db.query(sqlCons, function (erro,resultado) {
               // aqui estou checando se o retorno do SELECT trouxe dados
               if (resultado.length > 0) {
                   var dados = resultado.length;
                   resolve(dados);
               }
               else { 
                   return reject('ACESSO NEGADO!');
               }
           });
       });
      }  // end do validaAcessoUsuario
}
module.exports = CarrinhoControler;

