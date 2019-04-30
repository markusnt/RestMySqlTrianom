'use strict'

var Usuario = require('../models/usuario')

exports.list_all_usuario = function(req, res) {
    Usuario.getAllUsuario(function(err, usuario) {

        // console.log('controllerUsuario')
        if(err)
            res.send(err)
            // console.log('res', usuario)
        res.send(usuario)
    })
}

exports.create_a_usuario = function(req, res) {
    var new_usuario = new Usuario(req.body)

    if(!new_usuario.cd_usuario || !new_usuario.senha_usuario) {
        res.status(400).send({ error: true, message: 'Please providence describe'})
    } else {
        Usuario.createUsuario(new_usuario, function(err, usuario) {
            if(err)
                res.send(err)
            res.json(usuario)
        })
    }
}

exports.read_a_usuario = function(req, res) {
    Usuario.getUsuarioByCd(req.params.usuarioCd, function(err, usuario) {
        if(err)
            res.send(err)
        res.json(usuario)
    })
}

exports.read_a_subgrup = function(req, res) {
    Usuario.buscaSubUsuario(req.params.usuarioCd, function(err, usuario) {
        if(err)
            res.send(err)
        res.json(usuario)
    })
}


exports.update_a_usuario = function(req, res) {
    Usuario.updateByCd(req.params.usuarioCd, new Usuario(req.body), function(err, usuario) {
        if(err)
            res.send(err)
        res.json(usuario)
    })
}

exports.delete_a_usuario = function(req,res) {
    Usuario.remove( req.params.usuarioCd, function(err, usuario) {
        if(err)
            res.send(err)
        res.json({ message: 'Usuario successfully'})
    })
}