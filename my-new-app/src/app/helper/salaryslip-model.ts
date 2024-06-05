import moment, { Moment } from 'moment';
export interface salaryslip{
    allowance:number,
    basicsalary: number;
    bonus?: number;
    deductions?: number;
    grosssalary: number;
    netpay: number;
    payslipmonth: Moment;
    professionaltax: number;
    providentfund: number;
    securitydeposits: number;
    totaldeductions: number;
    employeeid:number;
}