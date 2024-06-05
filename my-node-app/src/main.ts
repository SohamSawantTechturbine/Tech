import express from 'express';
import { Sequelize } from 'sequelize';
import { upload } from './middleware/Multer';
import addemploye from './Controller/AddEmpolyee';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import routers from './Router/router';
import { Connection } from './Connection/Connection';


const port = process.env.PORT ? Number(process.env.PORT) : 5000;
console.log(__dirname);
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json({}))
  const uploadDirectory = path.join(__dirname, 'uploads');
 if (!fs.existsSync(uploadDirectory)) {
   fs.mkdirSync(uploadDirectory);
 }
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

Connection.authenticate()
  .then(() => {
    console.log("Connection to database successful");
    return Connection.sync(); // Syncing models with the database
  })
  .then(() => {
    console.log("Models synced with the database");
    
   })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(routers)

app.listen(5000, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
