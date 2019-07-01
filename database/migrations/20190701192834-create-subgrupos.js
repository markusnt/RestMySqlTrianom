module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('SubGrupos', {
      cd_subgrupo: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ds_subgrupo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cd_grupo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'grupos',
          key: 'cd_grupo'
        }
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
    return queryInterface.dropTable('SubGrupos');
  }
};