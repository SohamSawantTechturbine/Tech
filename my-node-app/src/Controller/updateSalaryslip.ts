import { Request, Response } from "express";
import { payslip } from "../Connection/Connection";

export const updateSalarySlip = async (req: Request, res: Response) => {
    try {
        // Extract slip ID and updated values from the request body
        const {userId, slipid, values ,employeeId} = req.body;
        const{providentfund,securitydeposits,allowance,basicsalary,bonus,deductions,grossSalary,netPay,payslipmonth,professionaltax,totaldeductions}=values
        // Find the salary slip in the database by its ID
        const existingSlip = await payslip.findOne({where:{ id: slipid }});
  console.log(existingSlip);
  //console.log(allowance,basicSalary,bonus,deductions,grossSalary,netPay,payslipMonth,professionalTax,totalDeductions);  console is changed
  
        if (!existingSlip) {
            return res.status(404).json({ error: "Salary slip not found" });
        }

        await existingSlip.update({
            allowance:allowance,
            basicsalary: basicsalary,
            bonus: bonus,
            deductions: deductions,
            grosssalary: grossSalary,
            netpay: netPay,
            payslipmonth: 
            payslipmonth,
            professionaltax: professionaltax,
            providentfund: providentfund,
            securitydeposits: securitydeposits,
            totaldeductions: totaldeductions,
            employeeid:employeeId?employeeId:userId,
        })
    
        await existingSlip.save();

        // Send a success response
        return res.status(200).json({ message: "Salary slip updated successfully" });
    } catch (error) {
        console.error("Error updating salary slip:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
