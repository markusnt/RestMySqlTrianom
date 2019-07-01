module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      cd_usuario: DataTypes.INTEGER,
      ds_usuario: DataTypes.STRING,
      senha_usuario: DataTypes.STRING,
    });
  
    return User;
  }