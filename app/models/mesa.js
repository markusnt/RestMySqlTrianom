'use strict'
var sql = require('../../db')

var Mesa = function (mesa) {
    this.cd_mesa = mesa.cd_mesa
    this.qtp_mesa = mesa.qtp_mesa
    this.st_mesa = mesa.st_mesa
}

Mesa.createMesa = function createMesa(newMesa, result) {

    sql.query("INSERT INTO mesa set ?", newMesa, function (err, res){

    if(err){
        console.log("error: ", err)
        result(err, null)
    } else {
        console.log(res.insertCd)
        result(null, res.insertCd)
    }
})
}

Mesa.getMesaByCd = function createMesa(mesaCd, result) {

sql.query("SELECT * from mesa where cd_mesa = ?", mesaCd, function (err, res) {
    if (err) {
        console.log("error: ", err)
        result(err, null)
    } else {
        result(null, res)
    }
})
}

Mesa.getAllMesa = function getAllMesa(result) {

sql.query("SELECT * from mesa", function (err, res) {
    if (err) {
        console.log("error: ", err)
        result(null, err)
    } else {
        console.log('Mesas: ', res)
        result(null, res)
    }
})
}

Mesa.updateByCd = function (cd_mesa, qtp_mesa, st_mesa, result) {

    sql.query("UPDATE mesa SET cd_mesa = ?, qtp_mesa = ?, st_mesa = ? WHERE cd_mesa = ?", [cd_mesa.cd_mesa,qtp_mesa.qtp_mesa, st_mesa.st_mesa, cd_mesa], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result( res)
        }
    })
}

Mesa.remove = function (cd_mesa, result) {
sql.query("DELETE FROM mesa WHERE cd_mesa = ?", [cd_mesa], function (err, res) {
    if(err) {
        console.log("error: ",err)
        result(null, err)
    } else {
        result (null, res)
    }
})
}

module.exports = Mesa
