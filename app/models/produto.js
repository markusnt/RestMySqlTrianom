module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      cd_produto: DataTypes.INTEGER,
      cd_consulta: DataTypes.INTEGER,
      ds_produto: DataTypes.STRING,
      pr_produto: DataTypes.DOUBLE,
      cd_subgrupo: DataTypes.STRING,
    });

    return Produto;
}