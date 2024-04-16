const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection')


const Cursos = connection.define('cursos', {
    nome: {
        type: DataTypes.STRING
    },
    duracao_horas: {
        type: DataTypes.INTEGER
    }
})

module.exports = Cursos