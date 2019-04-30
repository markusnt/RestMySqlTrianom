'use strict';
let sql = require('../../db');

let Grupo = (grupo) => {
    this.cd_grupo = grupo.cd_grupo
    this.ds_grupo = grupo.ds_grupo
}

// let sql = `proc_ins_grupo(?, ?)`

Grupo.getAllGrupo = (result) => {
    
    sql.query("SELECT * from grupo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            // console.log('Grupos : ', res);
            result(null, res)
        }
    })
}

Grupo.getGrupoByCd =  (_cdgrupo, result) => {
    
    sql.query("SELECT * from grupo where cd_grupo = ?", _cdgrupo, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = Grupo