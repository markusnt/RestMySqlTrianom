'use strict'

var Mesa = require('../models/mesa')

exports.list_all_mesa = function(req, res) {
    Mesa.getAllMesa(function(err, mesa) {

        // console.log('controllerMesa')
        if(err)
            res.send(err)
            // console.log('res', mesa)
        res.send(mesa)
    })
}

exports.create_a_mesa = function(req, res) {
    var new_mesa = new Mesa(req.body)

    if(!new_mesa.cd_mesa) {
        res.status(400).send({ error: true, message: 'Please providence describe'})
    } else {
        Mesa.createMesa(new_mesa, function(err, mesa) {
            if(err)
                res.send(err)
            res.json(mesa)
        })
    }
}

exports.read_a_mesa = function(req, res) {
    Mesa.getMesaByCd(req.params.mesaCd, function(err, mesa) {
        if(err)
            res.send(err)
        res.json(mesa)
    })
}

exports.read_a_subgrup = function(req, res) {
    Mesa.buscaSubMesa(req.params.mesaCd, function(err, mesa) {
        if(err)
            res.send(err)
        res.json(mesa)
    })
}


exports.update_a_mesa = function(req, res) {
    Mesa.updateByCd(req.params.mesaCd, new Mesa(req.body), function(err, mesa) {
        if(err)
            res.send(err)
        res.json(mesa)
    })
}

exports.delete_a_mesa = function(req,res) {
    Mesa.remove( req.params.mesaCd, function(err, mesa) {
        if(err)
            res.send(err)
        res.json({ message: 'Mesa successfully'})
    })
}