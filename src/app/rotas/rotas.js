// chamando a classe usuarios_controler
const UsuarioControlador = require('../controladores/usuarios_controler');
const usuarioCont = new UsuarioControlador();

// chamando a classe produto_controler
const ProdutoControlador = require('../controladores/produtos_controler');
const produtCont = new ProdutoControlador();

// chamando a classe UsuariosDAO
const UsuariosDAO = require('../BD/usuarios_dao');


module.exports = (app) => {
    // Evitar problema com o CORS
    app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
    });
    
// chamando a classe UsuariosDAO
const UsuariosDAO = require('../BD/usuarios_dao');
    /*******************Rotas***********************/
    
    //Abre o formulario index.marko
    app.get('/',usuarioCont.exibeFormAcesso());
  

    //Abre o formulario login.marko
    app.get('/login',function(req,res){
        res.marko(require('../views/usuarios/login/login.marko'));
    });


    //Abre o formulario cadastro.marko
    app.get('/cadastro',function(req,res){
        res.marko(require('../views/usuarios/cadastro/cadastro.marko'));
     });
  

    // abre o formulario de listagemProduto no vitrine.marko
    app.get('/vitrine',produtCont.listaProdutos());

    //Abre o formulario vitrine.marko
    app.get('/vitrineVestido',produtCont.listaProdutosVestido());
   
    //Abre o formulario vitrineSalto.marko
    app.get('/vitrineSaltos',produtCont.listaProdutosSaltos());

    //Abre o formulario compra.marko
    app.get('/compras',function(req,res){
       res.marko(require('../views/usuarios/compras/compras.marko'));
    });
    //Abre o formulario carrinho.marko
    app.get('/carrinho',function(req,res){
        res.marko(require('../views/usuarios/carrinho/carrinho.marko'));
    });
    //Abre o formulario vitrinePromocao.marko
    app.get('/vitrinePromocao',function(req,res){
        res.marko(require('../views/produtos/vitrine/vitrinePromocao.marko'));
    });
 
    //Abre o formulario vitrineSalto.marko
    app.get('/faleConosco',function(req,res){
         res.marko(require('../views/usuarios/faleConosco/faleConosco.marko'));
    });
    
}//end do modulo ROTAS 