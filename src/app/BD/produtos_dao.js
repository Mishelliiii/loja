class ProdutosDAO
{
    // construtor da classe
    constructor(db) 
    {
      this._db = db;
    }
    
    // método de SELECT  na tabela produtos
    listagemProdutos(callback) 
    {
      var sql =  'SELECT codProduto, descricao, codCategoria , preco , FOTO FROM produto where codCategoria = 1';
        console.log(sql);
          this._db.query(sql,
            (erro, resultados) =>
               callback(erro, resultados)
          )
   }

   listagemProdutosVestidos(callback) 
   {
     var sql =  'SELECT codProduto, descricao, codCategoria , preco , FOTO FROM produto where codCategoria = 2';
       console.log(sql);
         this._db.query(sql,
           (erro, resultados) =>
              callback(erro, resultados)
         )
  }
  listagemProdutosSaltos(callback) 
  {
    var sql =  'SELECT codProduto, descricao, codCategoria , preco , FOTO FROM produto where codCategoria = 3';
      console.log(sql);
        this._db.query(sql,
          (erro, resultados) =>
             callback(erro, resultados)
        )
 }
}
module.exports = ProdutosDAO;
