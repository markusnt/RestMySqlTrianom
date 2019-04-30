'use strict';
let sql = require('../../db');

let Usuario = (usuario) => {
    this.cd_usuario    = usuario.cd_usuario
    this.ds_usuario    = usuario.ds_usuario
    this.senha_usuario = usuario.senha_usuario
}