'use strict';
module.exports = function (app) {
  var GrupoList = require('../middleware/grupoController')
  var SubGrupoList = require('../middleware//subgrupoController')
  var VendaList = require('../middleware/vendaController')
  var ProdutoList = require('../middleware/produtoController')
  var MesaList = require('../middleware/mesaController')
  var UsuarioList = require('../middleware/usuarioController')
  // todoList Routes

  app.route('/mesa')
    .get(MesaList.list_all_mesa)
  app.route('/mesa/:_nrmesa')
    .get(MesaList.read_a_mesa)
  app.route('/mesaDisponivel/:_nrmesa')
    .put(MesaList.update_a_mesa_disponivel)
  app.route('/mesaAtendimento/:_nrmesa')
    .put(MesaList.update_a_mesa_atendimento)
  app.route('/mesaPreConta/:_nrmesa')
    .put(MesaList.update_a_mesa_preconta)

  app.route('/grupo')
    .get(GrupoList.list_all_grupo)
  app.route('/grupo/:_cdgrupo')
    .get(GrupoList.read_a_grupo)


  app.route('/subgrupo')
    .get(SubGrupoList.list_all_subgrupo)
  app.route('/subgrupo/:_cdsubgrupo')
    .get(SubGrupoList.read_a_subgrupo)
  app.route('/subgrupoS/:_cdgrupo')
    .get(SubGrupoList.searchSubGrupo)


  app.route('/produto')
    .get(ProdutoList.list_all_produto)
  app.route('/produto/:_cdproduto')
    .get(ProdutoList.read_a_produto)
  app.route('/produtoS/:_cdsubgrupo')
    .get(ProdutoList.searchProduto)

}

//https://www.w3resource.com/node.js/nodejs-mysql.php PROCEDURE USE
