import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { Connection } from './Connection/Connection';
import { ApolloServer } from '@apollo/server'; // Import correct express integration
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import { typeDefs } from './Connection/typedef-grapql/typedef';
import { login } from './Controller/Login';
import routers from './Router/router';
import { updateprofile } from './Controller/Updateprofile';

const startServer = async () => {
  console.log(__dirname);
  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  const uploadDirectory = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
  }

  app.get('/', (req, res) => {
    res.send({ message: 'Hello API' });
  });

  try {
    await Connection.authenticate();
    console.log("Connection to database successful");
    await Connection.sync(); // Syncing models with the database
    console.log("Models synced with the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // Define your resolver functions
  const resolvers = {
    Mutation: {
      login: login,
      update_profile:updateprofile
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start();
app.use(routers)
  // Apply Apollo Server middleware to your Express app
  app.use('/graphql', json(), expressMiddleware(apolloServer));
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

startServer();
