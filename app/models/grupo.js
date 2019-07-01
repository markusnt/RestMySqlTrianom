module.exports = (sequelize, DataTypes) => {
    const Grupo = sequelize.define('Grupo', {
      cd_grupo: DataTypes.INTEGER,
      ds_grupo: DataTypes.STRING,
    });
  
    return Grupo;
  }