'use strict';
let sql = require('../../db');

let Venda_X_Produto = (venda_x_produto) => {
    this.cd_produto = venda_x_produto.cd_produto
    this.cd_venda   = venda_x_produto.cd_venda
    this.quantidade = venda_x_produto.quantidade
}