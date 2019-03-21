'use strict'

var SubGrupo = require('../models/subgrupo')

exports.list_all_subgrupo = function(req, res) {
    SubGrupo.getAllSubGrupo(function(err, subgrupo) {

        console.log('controllerGrupo')
        if(err)
            res.send(err)
            console.log('res', subgrupo)
        res.send(subgrupo)
    })
}

exports.create_a_subgrupo = function(req, res) {
    var new_subgrupo = new SubGrupo(req.body)

    if(!new_subgrupo.ds_subgrupo || !new_subgrupo.cd_subgrupo || !new_subgrupo.cd_grupo) {
        res.status(400).send({ error: true, message: 'Please providence describe'})
    } else {
        SubGrupo.createSubGrupo(new_subgrupo, function(err, subgrupo) {
            if(err)
                res.send(err)
            res.json(subgrupo)
        })
    }
}

exports.read_a_subgrupo = function(req, res) {
    SubGrupo.getSubGrupoByCd(req.params.subgrupoCd, function(err, subgrupo) {
        if(err)
            res.send(err)
        res.json(subgrupo)
    })
}

exports.update_a_subgrupo = function(req, res) {
    SubGrupo.updateByCd(req.params.subgrupoCd, new SubGrupo(req.body), function(err, subgrupo) {
        if(err)
            res.send(err)
        res.json(subgrupo)
    })
}

exports.delete_a_subgrupo = function(req,res) {
    SubGrupo.remove( req.params.subgrupoCd, function(err, subgrupo) {
        if(err)
            res.send(err)
        res.json({ message: 'SubGrupo successfully'})
    })
}