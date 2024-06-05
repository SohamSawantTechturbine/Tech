import express from "express"
import addemploye from "../Controller/AddEmpolyee";
import { upload } from "../middleware/Multer";
import { login } from "../Controller/Login";
import { fetchprofile } from "../Controller/Fetchprofile";
import { fetchuserdepartment } from "../Controller/FetchUserdepartment";
import { fetchallemployee } from "../Controller/FetchAllemploye";
import { updateprofile } from "../Controller/Updateprofile";


const routers=express.Router();
routers.post('/addemployee', upload.single('file'), addemploye);
routers.post("/login",login)
routers.post("/fetchprofile",fetchprofile)
routers.get("/fetchuserdepartment/:userId",fetchuserdepartment)
routers.post("/fetchallemployee",fetchallemployee)
routers.post("/updateprofile",updateprofile)
export default routers;