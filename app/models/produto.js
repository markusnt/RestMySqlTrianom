'use strict';
let sql = require('../../db');

let Produto = (produto) => {
    this.cd_produto  = produto.cd_produto
    this.ds_produto  = produto.ds_produto
    this.pr_produto  = produto.pr_produto
    this.cd_subgrupo = produto.cd_subgrupo
}

Produto.getAllProduto = (result) => {
    
    sql.query("SELECT * from produto", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            // console.log('Grupos : ', res);
            result(null, res)
        }
    })
}


Produto.getProdutoByCd =  (_cdproduto, result) => {
    
    sql.query("SELECT * from produto where cd_produto = ?", _cdproduto, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Produto.searchProduto = function (_cdsubgrupo ,result) {
    
    sql.query("SELECT * FROM produto where cd_subgrupo =  ?",
    _cdsubgrupo, (err, res) => {
        if(err){
            console.log("error", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = Produto