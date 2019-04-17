'use strict';
var sql = require('../../db');

//Task object constructor
var Usuario = function (usuario) {
    this.cd_usuario = usuario.cd_usuario
    this.ds_usuario = usuario.ds_usuario
    this.senha_usuario = usuario.senha_usuario
}

Usuario.createUsuario = function createUsuario(newUsuario, result) {

    sql.query("INSERT INTO usuario set ?", newUsuario, function (err, res) {

        if(err){
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertCd)
            result(null, res.insertCd)
        }
    })
}

Usuario.getUsuarioByCd = function createUsuario(usuarioCd, result) {

    sql.query("SELECT * from usuario where cd_usuario = ?", usuarioCd, function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Usuario.getAllUsuario = function getAllUsuario(result) {

    sql.query("SELECT * from usuario", function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        } else {
            console.log('Usuarios: ', res)
            result(null, res)
        }
    })
}

Usuario.remove = function (cd_usuario, result) {
    sql.query("DELETE FROM usuario WHERE cd_usuario = ?", [cd_usuario], function (err, res) {
        if(err) {
            console.log("error: ",err)
            result(null, err)
        } else {
            result (null, res)
        }
    })
}

module.exports = Usuario