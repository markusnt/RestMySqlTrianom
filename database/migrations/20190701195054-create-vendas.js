module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Vendas', {
      cd_venda: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cd_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'cd_usuario'
        }
      },
      cd_mesa: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'mesas',
          key: 'cd_mesa'
        }
      },
      cd_produto: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'produtos',
          key: 'cd_produto'
        }
      },
      quantidade: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
    return queryInterface.dropTable('Vendas');
  }
};