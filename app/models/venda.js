'use strict';
let sql = require('../../db');

let Venda = (venda) => {
    this.cd_venda   = venda.cd_venda
    this.cd_usuario = venda.cd_usuario
    this.cd_mesa    = venda.cd_mesa
    this.data_inicio= venda.data_inicio
    this.data_fim   = venda.data_fim
}