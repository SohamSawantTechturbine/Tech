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



const routers=express.Router();
routers.post('/addemployee', upload.single('file'), addemploye);

routers.post("/fetchprofile",fetchprofile)
routers.post("/fetchsingleslip",fetchsingleslip)
routers.post("/fetchallemployee",fetchallemployee)
routers.get("/fetchuserdepartment/:userId",fetchuserdepartment)
routers.post("/addsalaryslip",addsalaryslip)
routers.post("/fetchsalaryslip",fetchsalaryslip)
routers.post("/updateSalarySlip",updateSalarySlip)
export default routers;