import multer from 'multer';
import path from 'path';
import fs from 'fs'; // Import the file system module

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDirectory = path.join(__dirname,"..", 'uploads');
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory);
        }
        console.log(uploadDirectory);
        
        cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname +"");
    },
});

export const upload = multer({ storage: storage });
