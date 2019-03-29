'user strict';
var sql = require('../../db');

//Task object constructor
var SubGrupo = function (subgrupo) {
    this.cd_subgrupo = subgrupo.cd_subgrupo
    this.ds_subgrupo = subgrupo.ds_subgrupo
    this.cd_grupo = subgrupo.cd_grupo
}

SubGrupo.createSubGrupo = function createSubGrupo(newSubGrupo, result) {

    sql.query("INSERT INTO subgrupo set ?", newSubGrupo, function (err, res) {

        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertCd)
            result(null, res.insertCd)
        }
    })
}

//dando erro    
SubGrupo.getSubGrupoByCd = function createSubGrupo(subgrupoCd, result) {
    
    sql.query("SELECT * from subgrupo where cd_subgrupo = ?", subgrupoCd, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

SubGrupo.getAllSubGrupo = function getAllSubGrupo(result) {
    
    sql.query("SELECT * from subgrupo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            console.log('SubGrupos : ', res);
            result(null, res)
        }
    })
}

SubGrupo.updateByCd = function (cd_subgrupo, ds_subgrupo, cd_grupo, result) {

    sql.query("UPDATE subgrupo SET cd_subgrupo = ?, ds_subgrupo = ?, cd_grupo = ? WHERE cd_subgrupo = ?", [cd_subgrupo.cd_subgrupo,ds_subgrupo.ds_subgrupo, cd_grupo.cd_grupo, cd_subgrupo], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result( res)
        }
    })
}

SubGrupo.remove = function (cd_subgrupo, result) {
    sql.query("DELETE FROM subgrupo WHERE cd_subgrupo = ?", [cd_subgrupo], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

SubGrupo.buscaProduto = function (cd_subgrupo ,result) {
    
    sql.query("SELECT * FROM produto where cd_subgrupo = ?",
    cd_subgrupo, function (err, res) {
        if(err){
            console.log("error", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = SubGrupo