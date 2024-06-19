import { Sequelize } from "sequelize";
import { AddEmpolyeedata } from "../Model/Addemplopyee-model";
import { salaryslipdata } from "../Model/SalarySlip-model";


const Connection=new Sequelize({
    database: 'Tech',
    dialect: 'postgres',
    username: 'postgres',
    password: 'Tech1mini',
    host: 'localhost',
    port: 5432,
})
console.log("connection");

const AddEmpolyee=AddEmpolyeedata(Connection);
const payslip=salaryslipdata(Connection);
export {Connection,AddEmpolyee,payslip}