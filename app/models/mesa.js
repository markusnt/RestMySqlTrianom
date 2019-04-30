'use strict';
let sql = require('../../db');

let Mesa = (mesa) => {
    this.cd_mesa = mesa.cd_mesa
    this.nr_mesa = mesa.nr_mesa
    this.st_mesa = mesa.st_mesa
}

Mesa.getAllMesa = (result) => {
    
    sql.query("SELECT * from mesa", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            // console.log('Grupos : ', res);
            result(null, res)
        }
    })
}

Mesa.getMesaByCd = (_nrmesa, result) => {
    
    sql.query("SELECT * from mesa where nr_mesa = ?", _nrmesa, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Mesa.updateByCd = (_nrmesa, result) => {
    const st_mesa = req.param.body
    sql.query("UPDATE mesa SET st_mesa = ? WHERE cd_mesa = ?", [st_mesa, _nrmesa], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result( res)
        }
    })
}

module.exports = Mesa