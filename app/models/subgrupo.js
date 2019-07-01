module.exports = (sequelize, DataTypes) => {
    const SubGrupo = sequelize.define('SubGrupo', {
      cd_subgrupo: DataTypes.INTEGER,
      ds_subgrupo: DataTypes.STRING,
      cd_grupo: DataTypes.INTEGER,
    });
  
    return SubGrupo;
  }