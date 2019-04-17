'use strict'

var Venda = require('../models/venda')

exports.list_all_venda = function(req, res) {
    Venda.getAllVenda(function(err, venda) {

        console.log('controllerVenda')
        if(err)
            res.send(err)
            console.log('res', venda)
        res.send(venda)
    })
}

exports.create_a_venda = function(req, res) {
    var new_venda = new Venda(req.body)

    if(!new_venda.cd_venda || !new_venda.cd_mesa || 
        !new_venda.cd_produto || !new_venda.qt_produto ||
        !new_venda.cd_usuario || !new_venda.ds_estado  ) {
            res.status(400).send({ error: true, message: 'Please providence inform'})
        } else {
            Venda.createVenda(new_venda, function(err, venda) {
                if(err)
                    res.send(err)
                res.json(venda)
            })
        }
}

exports.read_a_venda = function(req, res) {
    Venda.getVendaByCd(req.params.vendaCd, function(err, venda) {
        if(err)
            res.send(err)
        res.json(venda)
    })
}

exports.delete_a_venda = function(req, res) {
    Venda.remove( req.params.vendaCd, function(err, venda) {
        if(err)
            res.send(err)
        res.json({ message: 'Venda successfully' })
    })
}