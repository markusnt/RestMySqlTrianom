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
exports.update_a_mesa = function (req, res) {
    Mesa.updateByCd(req.params._nrmesa, new Mesa(req.body), function (err, mesa) {
        if (err)
            res.send(err)
        res.json(mesa)
    })
}