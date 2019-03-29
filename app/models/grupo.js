'use strict';
var sql = require('../../db');

//Task object constructor
var Grupo = function (grupo) {
    this.cd_grupo = grupo.cd_grupo
    this.ds_grupo = grupo.ds_grupo
}

Grupo.createGrupo = function createGrupo(newGrupo, result) {

    sql.query("INSERT INTO grupo set ?", newGrupo, function (err, res) {

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
Grupo.getGrupoByCd = function createGrupo(grupoCd, result) {
    
    sql.query("SELECT * from grupo where cd_grupo = ?", grupoCd, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Grupo.getAllGrupo = function getAllGrupo(result) {
    
    sql.query("SELECT * from grupo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            console.log('Grupos : ', res);
            result(null, res)
        }
    })
}

Grupo.updateByCd = function (cd_grupo, ds_grupo, result) {

    sql.query("UPDATE grupo SET cd_grupo = ?, ds_grupo = ? WHERE cd_grupo = ?", [cd_grupo.cd_grupo,ds_grupo.ds_grupo, cd_grupo], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result( res)
        }
    })
}

Grupo.remove = function (cd_grupo, result) {
    sql.query("DELETE FROM grupo WHERE cd_grupo = ?", [cd_grupo], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Grupo.buscaSubGrupo = function (cd_grupo ,result) {
    
    sql.query("SELECT * FROM subgrupo where cd_grupo =  ?",
    cd_grupo, function (err, res) {
        if(err){
            console.log("error", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}



module.exports = Grupo