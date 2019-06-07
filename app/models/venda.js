'use strict';
let sql = require('../../db');

let Venda = (venda) => {
    this.cd_venda   = venda.cd_venda
    this.cd_usuario = venda.cd_usuario
    this.cd_mesa    = venda.cd_mesa
    this.cd_produto= venda.cd_produto
    this.quantidade   = venda.quantidade
}

// Venda.InsertVenda = (_cdusuario, _nrmesa, _cdproduto, _quantidade, result) => {
//     sql.query(`INSERT INTO venda (cd_usuario, cd_mesa, cd_produto, quantidade) 
//                 VALUE (?, ?, ?, ?)`, _nrmesa, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err)
//         } else {
//             result( res)
//         }
//     })
// }

Venda.Insert_Venda = function createUser(new_venda, result) {    
    sql.query("INSERT INTO venda set ?", new_venda, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res);
                result(null, res);
            }
        });           
};

module.exports = Venda