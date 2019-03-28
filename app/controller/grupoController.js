'use strict'

var Grupo = require('../models/grupo')

exports.list_all_grupo = function(req, res) {
    Grupo.getAllGrupo(function(err, grupo) {

        console.log('controllerGrupo')
        if(err)
            res.send(err)
            console.log('res', grupo)
        res.send(grupo)
    })
}

exports.create_a_grupo = function(req, res) {
    var new_grupo = new Grupo(req.body)

    if(!new_grupo.ds_grupo || !new_grupo.cd_grupo) {
        res.status(400).send({ error: true, message: 'Please providence describe'})
    } else {
        Grupo.createGrupo(new_grupo, function(err, grupo) {
            if(err)
                res.send(err)
            res.json(grupo)
        })
    }
}

exports.read_a_grupo = function(req, res) {
    Grupo.getGrupoByCd(req.params.grupoCd, function(err, grupo) {
        if(err)
            res.send(err)
        res.json(grupo)
    })
}

exports.read_a_subgrup = function(req, res) {
    Grupo.buscaSubGrupo(req.params.grupoCd, function(err, grupo) {
        if(err)
            res.send(err)
        res.json(grupo)
    })
}


exports.update_a_grupo = function(req, res) {
    Grupo.updateByCd(req.params.grupoCd, new Grupo(req.body), function(err, grupo) {
        if(err)
            res.send(err)
        res.json(grupo)
    })
}

exports.delete_a_grupo = function(req,res) {
    Grupo.remove( req.params.grupoCd, function(err, grupo) {
        if(err)
            res.send(err)
        res.json({ message: 'Grupo successfully'})
    })
}