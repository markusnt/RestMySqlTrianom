'use strict'

var Grupo = require('../models/grupo')

exports.list_all_grupo = (req, res, next) => {

    Grupo.getAllGrupo((err, grupo) => {
        if (err || grupo == '') {
            console.log("Nenhum Grupo Encontrado -> " + err)
            res.status(404).json({ success: false, message: 'Nenhum Grupo Encontrado' })
            return
        }
        res.status(200).json(grupo)
    })
}

exports.read_a_grupo = (req, res) => {

    Grupo.getGrupoByCd(req.params._cdgrupo, (err, grupo) => {
        if (err || req.params._cdgrupo == '') {
            console.log("Grupo nao encontrado -> " + err)
            res.status(404).json({ success: false, message: 'Grupo nao encontrado' })
            return
        }
        res.status(200).json(grupo)
    })
}

