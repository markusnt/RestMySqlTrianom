module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Grupos', {
      cd_grupo: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ds_grupo: {
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
    return queryInterface.dropTable('Grupos');
  }
};