'use strict'
var sql = require('../../db');

var Produto = function (produto) {
    this.cd_produto = produto.cd_produto
    this.ds_produto = produto.ds_produto
    this.pr_produto = produto.pr_produto
    this.cd_subgrupo = produto.cd_subgrupo
}

Produto.createProduto = function createProduto(newProduto, result) {
     
    sql.query("INSERT INTO produto set ?", newProduto, function (err, res) {

        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertCd)
            result(null, res.insertCd)
        }
     })
}


Produto.getProdutoByCd = function createProduto(produtoCd, result) {

    sql.query("SELECT * from produto where cd_produto = ?", produtoCd, function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(err,null)
        } else {
            result(null, res)
        }
    })
}


Produto.getAllProduto = function getAllProduto(result) {
     
    sql.query("SELECT * from produto", function (err, res) {
        if(err) {
            console.log("error: ", err)
            result(null, err)
        } else {
            console.log('Produto: ', res)
            result(null, res)
        }
    })
}

Produto.remove = function (cd_produto, result) {

    sql.query("DELETE FROM produto WHERE cd_produto = ?", [cd_produto], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = Produto