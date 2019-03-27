'use strict';
module.exports = function(app) {
  var GrupoList = require('../controller/grupoController')
  var SubGrupoList = require('../controller/subgrupoController')
  var VendaList = require('../controller/vendaController')
  var ProdutoList = require('../controller/produtoController')
  // todoList Routes



  app.route('/grupo')
    .get(GrupoList.list_all_grupo)
    .post(GrupoList.create_a_grupo)
  app.route('/grupo/:grupoCd')
    .get(GrupoList.read_a_grupo)
    .put(GrupoList.update_a_grupo)
    .delete(GrupoList.delete_a_grupo)


  app.route('/subgrupo')
    .get(SubGrupoList.list_all_subgrupo)
    .post(SubGrupoList.create_a_subgrupo)
  app.route('/subgrupo/:subgrupoCd')
    .get(SubGrupoList.read_a_subgrupo)
    .put(SubGrupoList.update_a_subgrupo)
    .delete(SubGrupoList.delete_a_subgrupo)


  app.route('/venda')
    .get(VendaList.list_all_venda)
    .post(VendaList.create_a_venda)
  app.route('/venda/:vendaCd')
    .get(VendaList.read_a_venda)
    .put(VendaList.update_a_venda)
    .delete(VendaList.delete_a_venda)
    
  
  app.route('/produto')
    .get(ProdutoList.list_all_produto)
    .post(ProdutoList.create_a_produto)
  app.route('produto/:produtoCd')
    .get(ProdutoList.read_a_produto)
    .delete(ProdutoList.delete_a_produto)
  };

