import { Sequelize, DataTypes } from 'sequelize';

export const AddEmpolyeedata = (sequelize: Sequelize) => {
  return sequelize.define('AddEmpolyee', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Join_Date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Birth_Date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    File: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Contact: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
