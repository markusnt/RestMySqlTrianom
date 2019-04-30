'use strict'

var SubGrupo = require('../models/subgrupo')

exports.list_all_subgrupo = (req, res) => {

    SubGrupo.getAllSubGrupo((err, subgrupo) => {

        if (err || subgrupo == '') {
            console.log("Nenhum subgrupo Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'Nenhum subgrupo Encontrado' })
            return
        }
        res.status(200).json(subgrupo)
    })
}

exports.read_a_subgrupo = (req, res) => {
    SubGrupo.getSubGrupoByCd(req.params._cdsubgrupo, (err, subgrupo) => {
        if (err || req.params._cdsubgrupo == '') {
            console.log("subgrupo nao Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'subgrupo nao Encontrado' })
            return
        }
        res.status(200).json(subgrupo)
    })
}

exports.searchSubGrupo = (req, res) => {
    SubGrupo.searchSubGrupo(req.params._cdgrupo, function(err, subgrupo) {
        if (err || req.params._cdgrupo == '') {
            console.log("subgrupo nao Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'subgrupo nao Encontrado' })
            return
        }
        res.status(200).json(subgrupo)
    })
}