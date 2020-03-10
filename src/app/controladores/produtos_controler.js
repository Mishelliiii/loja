// chamando a classe ProdutosDAO
const ProdutosDAO = require('../BD/produtos_dao');

// instância do BD configurado
var db = require('../../config/database');

class produtosControler
{
    listaProdutos() {
        return function (req, res) {
            // verificando se a variavel de sessao LOGIN existe
          //  if (req.session.cpf) {
                const produtoDAO = new ProdutosDAO(db);
                produtoDAO.listagemProdutos(function (error, resultados) {
                    res.marko(
                        require('../views/produtos/vitrine/vitrine.marko'),
                        {
                            produtos: resultados
                        }
                    );
                });
           // }
           //// else {
              //  res.send("<h1>PRIMEIRAMENTE, FAÇA LOGIN!</h1>");
            //}
        }  // end da function do return
    }
    listaProdutosVestido() {
        return function (req, res) {
            // verificando se a variavel de sessao LOGIN existe
          //  if (req.session.cpf) {
                const produtoDAO = new ProdutosDAO(db);
                produtoDAO.listagemProdutosVestidos(function (error, resultados) {
                    res.marko(
                        require('../views/produtos/vitrine/vitrineVestido.marko'),
                        {
                            produtos: resultados
                        }
                    );
                });
            }
        }
        listaProdutosSaltos() {
            return function (req, res) {
                // verificando se a variavel de sessao LOGIN existe
              //  if (req.session.cpf) {
                    const produtoDAO = new ProdutosDAO(db);
                    produtoDAO.listagemProdutosSaltos(function (error, resultados) {
                        res.marko(
                            require('../views/produtos/vitrine/vitrineSaltos.marko'),
                            {
                                produtos: resultados
                            }
                        );
                    });
                }
            }  
}
module.exports = produtosControler;
