module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Mesas', {
      cd_mesa: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nr_mesa: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      st_mesa: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Mesas');
  }
};