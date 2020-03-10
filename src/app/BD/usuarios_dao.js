class UsuariosDAO 
{
  // construtor da classe
  constructor(db) 
  {
    this._db = db;
  }

  // método de SELECT  na tabela USUARIO
  listagemUsuario(callback) 
  {
    var sql =  'SELECT cpf,nome, celular, telefone,email, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNascimento FROM usuario';
    console.log(sql);
    this._db.query(sql,
        (erro, resultados) =>
            callback(erro, resultados)
    )
  }


  incluiUsuarios(usuario) {
    return new Promise((resolve, reject) => {
      var sqlInsere = "INSERT INTO USUARIOS (cpf,nome,dataNascimento,email) VALUES('"+ usuario.cpf + "','" + usuario.nome + "','" +  usuario.niver + "','" + usuario.email + "')";
      
      this._db.query(sqlInsere,
          function (erro) {
             if (erro) {
                 console.log(erro);
                 return reject('Inclusão do novo Usuarios NÃO foi concluída!');
             }
              resolve();
          }
      );
    });
  }

  excluiUsuario(cpf) {
    return new Promise((resolve, reject) => {
        var sqlDel = "DELETE FROM USUARIOS WHERE cpf=" + cpf;
        console.log(sqlDel);
        this._db.query(sqlDel,
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('Exclusão dos dados do Usuarios NÃO foi concluída!');
                }
                resolve();
            }
        );
    });
  }

  atualizaUsuario(usuario) {
    return new Promise((resolve, reject) => {
        var sqlAtualiza = "UPDATE USUARIO set nome='" + usuario.nome +
            "', dataNascimento='" + usuario.dataNascimento +  "', email='" +
            usuario.email + "' where cpf=" + usuario.cpf;
        console.log(sqlAtualiza);
        this._db.query(sqlAtualiza,
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('Atualização dos dados do Usuarios NÃO foi concluída!');
                }
                resolve();
            });
    });
  }

  consultaUsuarioPorCpf(cpf, callback) {
    var sqlCons = 'SELECT cpf,nome, celular, telefone,email, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNascimento FROM Usuario WHERE cpf=' + cpf;
    console.log(sqlCons);
    this._db.query(
        sqlCons,
        (erro, resultados) =>
            callback(erro, resultados)
    )
 } 

}  // end da classe
module.exports = UsuariosDAO;