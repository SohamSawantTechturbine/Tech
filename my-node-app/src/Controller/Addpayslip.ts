import { Request, Response } from 'express';
import { payslip } from '../Connection/Connection';

export const addsalaryslip = async (req:Request, res:Response) => {
  const {
    employeeId,
    basicSalary,
    bonus,
    deductions,
    allowance,
    grossSalary,
    netPay,
    payslipMonth,
    professionalTax,
    providentFund,
    securityDeposits,
    totalDeductions,
    userId
  } = req.body;
  console.log(
    typeof employeeId,
    basicSalary,
    bonus,
    deductions,
    allowance,
    grossSalary,
    netPay,
    payslipMonth,
    professionalTax,
    providentFund,
    securityDeposits,
    totalDeductions,userId
  );
  try {
    const payslipDate = new Date(payslipMonth);
    const payslipDateOnly = new Date(
      payslipDate.getFullYear(),
      payslipDate.getMonth(),
      payslipDate.getDate()
    ).toISOString();
    // Check if a salary slip already exists for the given employee and month
    const existingSalarySlip = await payslip.findOne({
      where: {
        employeeid: employeeId,
        payslipmonth: payslipMonth,
      },
    });

    if (existingSalarySlip) {
      // If a salary slip already exists, return an error response
      return res
        .status(400)
        .json({
          error: 'Salary slip already exists for this employee and month',
        });
    }
    const newSalarySlip = await payslip.create({
      employeeid: employeeId,
      basicsalary: basicSalary,
      bonus: bonus,
      deductions: deductions,
      allowance: allowance,
      grosssalary: grossSalary,
      netpay: netPay,
      payslipmonth: payslipDateOnly,
      professionaltax: professionalTax,
      providentfund: providentFund,
      securitydeposits: securityDeposits,
      totaldeductions: totalDeductions,
    });
    return res.status(201).json(newSalarySlip);
  } catch (error) {
    return res.status(500).send({ error: 'Internal server error' });
  }
};
