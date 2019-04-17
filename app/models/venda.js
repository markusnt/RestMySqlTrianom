'use strict'
var sql = require('../../db')

var Venda = function (venda) {
    this.cd_venda = venda.cd_venda
    this.cd_mesa = venda.cd_mesa
    this.cd_produto = venda.cd_produto
    this.qt_produto = venda.qt_produto
    this.cd_usuario = venda.cd_usuario
    this.ds_estado = venda.ds_estado
}

Venda.createVenda = function createVenda(newVenda, result) {

    sql.query("INSERT INTO venda set ?", newVenda, function (err, res) {

        if(err){
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertCd)
            result(null, res.insertCd)
        }
    })
}

Venda.getVendaByCd = function createVenda(vendaCd, result) {

    sql.query("SELECT * from venda where cd_venda = ?", vendaCd, function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Venda.getAllVenda = function getAllVenda(result) {

    sql.query("SELECT * from venda", function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        } else {
            console.log('Vendas: ', res)
            result(null, res)
        }
    })
}

Venda.remove = function (cd_venda, result) {
    sql.query("DELETE FROM venda WHERE cd_venda = ?", [cd_venda], function (err, res) {
        if(err) {
            console.log("error: ",err)
            result(null, err)
        } else {
            result (null, res)
        }
    })
}

module.exports = Venda
