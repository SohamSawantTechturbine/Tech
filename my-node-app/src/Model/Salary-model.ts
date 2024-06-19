import { Sequelize, DataTypes } from 'sequelize';

export const SalaryModel = (sequelize: Sequelize) => {
  return sequelize.define('Salary', {
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    SD: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startingDate: {
      type: DataTypes.DATEONLY, // Use DATEONLY for only date without time
      allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  });
};
