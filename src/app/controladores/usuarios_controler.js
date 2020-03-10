// chamando a classe ClientesDAO
const UsuariosDAO = require('../BD/usuarios_dao');

// instância do BD configurado
var db = require('../../config/database');


class UsuariosControler
{

    exibeFormAcesso() {
        return function(req, res) {
            res.marko(
                require('../views/usuarios/index.marko'));    
        }
    }

    validaAcessoUsuario() {
        return function(req, res) {
            const usuarioDAO = new UsuariosDAO(db);
            usuarioDAO.validaAcessoUsuario(req.body.cpf,req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        // criando 2 variaveis de sessao: LOGIN e SENHA
                        req.session.cpf = req.body.cpf;
                        req.session.senha = req.body.senha;
                        console.log("Variavel de Sessao CPF = " + req.session.cpf);
                        console.log("Variavel de Sessao SENHA = " + req.session.senha);
                       res.redirect('/');
                    }
                })
                .catch(erro => res.redirect('/login'));
        }
    }
}
module.exports = UsuariosControler;