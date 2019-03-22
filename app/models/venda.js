'use strict'
var sql = require('../../db')

var Venda = function (venda) {
    this.cd_venda = venda.cd_venda
    this.nr_mesa = venda.nr_mesa
    this.cd_produto = venda.cd_produto
    this.qt_produto = venda.qt_produto
    this.ds_obs = venda.ds_obs
    this.ds_produto = venda.ds_produto
    this.cd_consulta = venda.cd_consulta
    this.cd_usuario = venda.cd_usuario
    this.vr_unitario = venda.vr_unitario
    this.ds_aliquota = venda.ds_aliquota
    this.nr_comanda = venda.nr_comanda
    this.ds_estado = venda.ds_estado
    this.cb_servico = venda.cb_servico
    this.nr_mesatranf = venda.nr_mesatranf
    this.cd_comissao = venda.cd_comissao
    this.cb_compprod = venda.cb_compprod
    this.cd_vendavincu = venda.cd_vendavincu
    this.ds_imp = venda.ds_imp
    this.cb_apelido = venda.cb_apelido
    this.cb_funcionario = venda.cb_funcionario
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

Venda.updateByCd = function (cd_venda, nr_mesa, cd_produto, qt_produto, ds_obs,
    ds_produto, cd_consulta, cd_usuario, vr_unitario, ds_aliquota, nr_comanda,
    ds_estado, cb_servico, nr_mesatranf, cd_comissao, cb_compprod, cd_vendavincu,
    ds_imp, cb_apelido, cb_funcionario, result) {

        sql.query("UPDATE venda SET cd_venda = ?, nr_mesa = ?, cd_produto = ?, qt_produto = ?, ds_obs = ?, ds_produto = ?, cd_consulta = ?, cd_usuario = ?, vr_unitario = ?, ds_aliquota = ?, nr_comanda =?, ds_estado = ?, cb_servico = ?, nr_mesatranf = ?, cd_comissao = ?, cb_compprod = ?, cd_vendavincu = ?, ds_imp = ?, cb_apelido = ?, cb_funcionario = ?  WHERE cd_venda = ?", 
        [nr_mesa.nr_mesa,cd_produto.cd_produto,
            qt_produto.qt_produto,ds_obs.ds_obs,
            ds_produto.ds_produto,cd_consulta.cd_consulta,
            cd_usuario.cd_usuario,vr_unitario.vr_unitario,
            ds_aliquota.ds_aliquota,nr_comanda.nr_comanda, 
            ds_estado.ds_estado, cb_servico.cb_servico, 
            nr_mesatranf.nr_mesatranf, cd_comissao.cd_comissao, 
            cb_compprod.cb_compprod, cd_vendavincu.cd_vendavincu, 
            ds_imp.ds_imp, cb_apelido.cb_apelido, 
            cb_funcionario.cb_funcionario,cd_venda], function (err, res) {
            if (err) {
                console.log("error: ", err )
                result(null, err)
            } else {
                result (res)
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
