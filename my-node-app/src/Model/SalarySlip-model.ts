import { Sequelize, DataTypes } from 'sequelize';

export const salaryslipdata = (sequelize: Sequelize) => {
  return sequelize.define('payslip', {
    allowance: { type: DataTypes.INTEGER, allowNull: false },
    basicsalary: { type: DataTypes.INTEGER, allowNull: false },

    bonus: { type: DataTypes.INTEGER, allowNull: false },
    deductions: { type: DataTypes.INTEGER, allowNull: false },
    grosssalary: { type: DataTypes.INTEGER, allowNull: false },
    netpay: { type: DataTypes.INTEGER, allowNull: false },
    payslipmonth: { type: DataTypes.STRING, allowNull: true },
    professionaltax: { type: DataTypes.INTEGER, allowNull: false },
    providentfund: { type: DataTypes.INTEGER, allowNull: false },
    securitydeposits: { type: DataTypes.INTEGER, allowNull: false },
    totaldeductions: { type: DataTypes.INTEGER, allowNull: false },
    employeeid: { type: DataTypes.INTEGER, allowNull: false },
  });
};
