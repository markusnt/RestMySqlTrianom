module.exports = (sequelize, DataTypes) => {
    const Mesa = sequelize.define('Mesa', {
      cd_mesa: DataTypes.INTEGER,
      nr_mesa: DataTypes.INTEGER,
      st_mesa: DataTypes.STRING,
    });
  
    return Mesa;
  }