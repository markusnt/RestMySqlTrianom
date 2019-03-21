'use strict';
module.exports = function(app) {
  var GrupoList = require('../controller/grupoController')
  var SubGrupoList = require('../controller/subgrupoController')
  
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
    };

