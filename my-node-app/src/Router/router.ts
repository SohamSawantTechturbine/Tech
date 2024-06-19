import express from "express"
import addemploye from "../Controller/AddEmpolyee";
import { upload } from "../middleware/Multer";

import { fetchprofile } from "../Controller/Fetchprofile";
import { fetchallemployee } from "../Controller/FetchAllemploye";

import { addsalaryslip } from "../Controller/Addpayslip";
import { fetchsalaryslip } from "../Controller/Fetchsalaryslips";
import { fetchsingleslip } from "../Controller/fetchsingleslip";
import { updateSalarySlip } from "../Controller/updateSalaryslip";
import { fetchuserdepartment } from "../Controller/FetchUserdepartment";
import { logindata } from "../Controller/Login";
import { Refreshtoken } from "../Controller/refreshToken";
import { Addsalary } from "../Controller/Addsalary";
import { fetchSalary } from "../Controller/Fetchsalary";
import { fetch_All_salaries } from "../Controller/fetch_all_salaries";
import { sendSlip } from "../Controller/sendsalaryslip";



const routers=express.Router();
routers.post('/addemployee', upload.single('file'), addemploye);
routers.post("/login",logindata)
routers.post("/refresh-token",Refreshtoken)
routers.post("/fetchprofile",fetchprofile)
routers.post("/fetchsingleslip",fetchsingleslip)
routers.post("/fetchallemployee",fetchallemployee)
routers.get("/fetchuserdepartment/:userId",fetchuserdepartment)
routers.post("/addsalaryslip",addsalaryslip)
routers.post("/fetchsalaryslip",fetchsalaryslip)
routers.post("/updateSalarySlip",updateSalarySlip)
routers.post("/Addsalary",Addsalary)
routers.get('/salary/:employeeId', fetchSalary);
routers.post('/fetchAllsalaries', fetch_All_salaries);
routers.post('/sendSalarySlip',upload.single("pdf"), sendSlip);
export default routers;