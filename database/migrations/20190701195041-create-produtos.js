module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Produtos', {
      cd_produto: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cd_consulta: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      ds_produto: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pr_produto: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      cd_subgrupo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'subgrupos',
          key: 'cd_subgrupo'
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
    return queryInterface.dropTable('Produtos');
  }
};