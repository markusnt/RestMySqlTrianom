module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define('Venda', {
      cd_venda: DataTypes.INTEGER,
      cd_usuario: DataTypes.INTEGER,
      cd_mesa: DataTypes.INTEGER,
      cd_produto: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
    });
  
    return Venda;
  }