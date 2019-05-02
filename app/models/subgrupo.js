'use strict';
let sql = require('../../db');

let SubGrupo = (subgrupo) => {
    this.cd_subgrupo = subgrupo.cd_subgrupo
    this.ds_subgrupo = subgrupo.ds_subgrupo
    this.cd_grupo    = subgrupo.cd_grupo
}

SubGrupo.getAllSubGrupo = (result) => {
    
    sql.query("SELECT * from subgrupo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            // console.log('Grupos : ', res);
            result(null, res)
        }
    })
}


SubGrupo.getSubGrupoByCd =  (_cdsubgrupo, result) => {
    
    sql.query("SELECT * from subgrupo where cd_subgrupo = ?", _cdsubgrupo, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

SubGrupo.searchSubGrupo = function (_cdgrupo ,result) {
    
    sql.query("SELECT * FROM subgrupo where cd_grupo =  ?",
    _cdgrupo, (err, res) => {
        if(err){
            console.log("error", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = SubGrupo