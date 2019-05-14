'use strict'

var Mesa = require('../models/mesa')

exports.list_all_mesa = (req, res, next) => {

    Mesa.getAllMesa((err, mesa) => {

        if (err || mesa == '') {
            console.log("Nenhuma Mesa Encontrada -> " + err)
            res.status(404).json({ success: false, message: 'Nenhuma Mesa Encontrada' })
            return
        }
        res.status(200).json(mesa)
    })
}

exports.read_a_mesa = (req, res) => {
    Mesa.getMesaByCd(req.params._nrmesa, (err, mesa) => {
        if (err || req.params._nrmesa == '') {
            console.log("Mesa nao Encontrada -> " + err)
            res.status(404).json({ success: false, message: 'Mesa nao Encontrada' })
            return
        }
        res.status(200).json(mesa)
    })
}

//Arrumar PUT
exports.update_a_mesa_disponivel = (req, res) => {
    Mesa.updateByDisponivel(req.params._nrmesa, (err, mesa) => {
        if (req.params._nrmesa == '') {
            console.log("Mesa nao Encontrada -> " + err)
            res.status(404).json({ success: false, message: 'Mesa nao Encontrada' })
            return
        }
        res.status(200).json(mesa)
    })
}

exports.update_a_mesa_atendimento = (req, res) => {
    Mesa.updateByAtendimento(req.params._nrmesa, (err, mesa) => {
        if (req.params._nrmesa == '') {
            console.log("Mesa nao Encontrada -> " + err)
            res.status(404).json({ success: false, message: 'Mesa nao Encontrada' })
            return
        }
        res.status(200).json(mesa)
    })
}

exports.update_a_mesa_preconta = (req, res) => {
    Mesa.updateByPreConta(req.params._nrmesa, (err, mesa) => {
        if (req.params._nrmesa == '') {
            console.log("Mesa nao Encontrada -> " + err)
            res.status(404).json({ success: false, message: 'Mesa nao Encontrada' })
            return
        }
        res.status(200).json(mesa)
    })
}
